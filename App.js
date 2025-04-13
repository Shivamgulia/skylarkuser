import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./Main";
import AuthContextProvider from "./src/store/authContext";
import APIContextProvider from "./src/store/apiContext";

export default function App() {
  return (
    <AuthContextProvider>
      <APIContextProvider>
        <Main />
      </APIContextProvider>
    </AuthContextProvider>
  );
}
