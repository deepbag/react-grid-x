import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { encrypt, decrypt } from "document/utils/cryptojs"; // Assuming you have these utility functions

interface ConfigContextType {
  config: Record<string, any>;
  setConfigKey: (key: string, value: any) => void;
  removeConfigKey: (key: string) => void;
  clearConfig: () => void;
}

interface ConfigProviderProps {
  children: ReactNode; // `children` can be any valid React element
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

// A key for local storage
const CONFIG_STORAGE_KEY = "appConfig";

// Helper function to load the config from localStorage
const loadConfigFromStorage = (): Record<string, any> => {
  try {
    const encryptedConfig = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (encryptedConfig) {
      const decryptedConfig = decrypt(encryptedConfig);
      return decryptedConfig || {}; // Return empty object if decryption fails
    }
    return {};
  } catch (error) {
    console.error("Error reading config from storage:", error);
    return {};
  }
};

// A helper function to save config to localStorage
const saveConfigToStorage = (config: Record<string, any>) => {
  try {
    const encryptedConfig = encrypt(config);
    localStorage.setItem(CONFIG_STORAGE_KEY, encryptedConfig);
  } catch (error) {
    console.error("Error saving config to storage:", error);
  }
};

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<Record<string, any>>(
    loadConfigFromStorage()
  );

  // Update localStorage when config changes
  useEffect(() => {
    saveConfigToStorage(config);
  }, [config]);

  const setConfigKey = (key: string, value: any) => {
    setConfig((prevConfig) => {
      const updatedConfig = { ...prevConfig, [key]: value };
      return updatedConfig;
    });
  };

  const removeConfigKey = (key: string) => {
    setConfig((prevConfig) => {
      const { [key]: removed, ...restConfig } = prevConfig;
      return restConfig;
    });
  };

  const clearConfig = () => {
    setConfig({});
  };

  console.log("config", config);

  return (
    <ConfigContext.Provider
      value={{ config, setConfigKey, removeConfigKey, clearConfig }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

// Custom hook to access config context
export const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
