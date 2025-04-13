import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

export const APIContext = React.createContext({
  BaseAPIPath: "http://localhost:8080",
});

export default function APIContextProvider({ children }) {
  const value = {
    BaseAPIPath: "http://localhost:8080",
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}
