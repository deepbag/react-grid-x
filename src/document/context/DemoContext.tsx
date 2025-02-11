import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for demoConfig (your state object)
interface DemoConfigProp {
  paginationType: "rgx-table-pagination" | "rgx-arrow-pagination";
  rowPerPage: number;
  pageNumber: number;
  sortBy: string[];
  mulitpleSort: string;
  tooltip: string[];
  rowClickEvent: string;
  rowSelection: string;
  rowExpand: string;
  serverPagination:string;
  loader: string;
  data: any[],
  totalRows: number;
  loading: boolean;
  options: {
    rowPerPage?: number[];
    sortBy?: {
      label: string;
      value: string;
    }[];
    tooltip?: {
      label: string;
      value: string;
    }[];
    sortMultiple?: {
      label: string;
      value: string;
    }[];
    rowClickEvent?: {
      label: string;
      value: string;
    }[];
    rowSelection?: {
      label: string;
      value: string;
    }[];
    rowExpand?: {
      label: string;
      value: string;
    }[];
    paginationType?: {
      label: string;
      value: string;
    }[];
    loader?: {
      label: string;
      value: string;
    }[];
    serverPagination?: {
      label: string;
      value: string;
    }[];
  };
}

// Define the context type
interface DemoContextType {
  demoConfig: DemoConfigProp;
  setDemoConfig: (value: DemoConfigProp) => void;
  onUpdateDemoConfig: (key: string, value: any) => void;
}

// Create the context with default values
const DemoContext = createContext<DemoContextType | undefined>(undefined);

// Define the provider component
export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const [demoConfig, setDemoConfig] = useState<DemoConfigProp>({
    paginationType: "rgx-table-pagination",
    rowPerPage: 10,
    pageNumber: 1,
    data: [],
    totalRows: 0,
    sortBy: ["name"],
    mulitpleSort: "disabled",
    tooltip: ["name"],
    rowClickEvent: "disabled",
    rowSelection: "disabled",
    rowExpand: "disabled",
    loader: "disabled",
    serverPagination:"disabled",
    loading: false,
    options: {
      rowPerPage: [5, 10, 15],
      sortBy: [
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Date Of Birth",
          value: "dateOfBirth",
        },
        {
          label: "Company",
          value: "company",
        },
        {
          label: "Address",
          value: "address",
        },
        {
          label: "Email",
          value: "email",
        },
        {
          label: "Country",
          value: "country",
        },
      ],
      tooltip: [
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Date Of Birth",
          value: "dateOfBirth",
        },
        {
          label: "Company",
          value: "company",
        },
        {
          label: "Address",
          value: "address",
        },
        {
          label: "Email",
          value: "email",
        },
        {
          label: "Country",
          value: "country",
        },
      ],
      sortMultiple: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      rowClickEvent: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      rowSelection: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      rowExpand: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      loader: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      serverPagination: [
        {
          label: "Enabled",
          value: "enabled",
        },
        {
          label: "Disabled",
          value: "disabled",
        },
      ],
      paginationType: [
        {
          label: "Table Pagination",
          value: "rgx-table-pagination",
        },
        {
          label: "Arrow Pagination",
          value: "rgx-arrow-pagination",
        },
      ],
    },
  });

  // Function to update specific keys in demoConfig, supports nested keys
  const onUpdateDemoConfig = (key: string, value: any) => {
    const keys = key.split("."); // Split the key by dot to handle nested keys

    setDemoConfig((prevState) => {
      let updatedState = { ...prevState };
      let current: any = updatedState;

      // Loop through the keys and update the nested property
      keys.forEach((keyPart, index) => {
        if (index === keys.length - 1) {
          current[keyPart] = value; // Update the final key with the value
        } else {
          current = current[keyPart]; // Drill down to the next level
        }
      });

      return updatedState;
    });
  };
  return (
    <DemoContext.Provider
      value={{ demoConfig, setDemoConfig, onUpdateDemoConfig }}
    >
      {children}
    </DemoContext.Provider>
  );
};

// Custom hook to use the context
export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used within a DemoProvider");
  }
  return context;
};
