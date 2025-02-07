import CryptoJS from "crypto-js";

// Secret key (Ensure it remains constant)
const SECRET_KEY = "y2u0KCR1Pa9kmelwyGlhf5PKXMwbIr2r";

// Function to encrypt data
export const encrypt = (data: any): string => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    return encrypted;
  } catch (error) {
    console.error("Encryption error:", error);
    return "";
  }
};

// Function to decrypt data
export const decrypt = (encrypted: string): any => {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error("Decryption failed");

    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decryption error:", error);
    return null; // Return null or a default value to handle the failure
  }
};
