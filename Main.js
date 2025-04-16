import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./src/store/authContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./src/stacks/AuthStack";
import StudentStack from "./src/stacks/StudentStack";

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function checkUser() {
      const token = await AsyncStorage.getItem("token");
      if (!!token) {
        setLoggedIn(true);
        const user = await AsyncStorage.getItem("user");
        const userObj = await JSON.parse(user);
        authCtx.setValues({ user: userObj, token });
      }
    }
    checkUser();
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoggedIn(authCtx.isLoggedIn);
  }, [authCtx]);

  if (loading) {
    return (
      <View style={styles.loading}>
        {/* <Loading /> */}
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        {!loggedIn && <AuthStack />}
        {loggedIn && <StudentStack />}
        {/* {loggedIn && (
          <View style={styles.navbar}>
            <Navbar />
          </View>
        )} */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    flex: 0,
  },
  loading: {
    flex: 1,
  },
});
