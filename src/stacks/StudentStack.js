import { StyleSheet, Pressable, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../screens/Main";
import SelectLogin from "../screens/SelectLogin";
import EmailLogin from "../screens/EmailLogin";
import Mobile from "../screens/Mobile";
import ConfirmOTP from "../screens/ConfirmOtp";
import Home from "../screens/Home";
import Session from "../screens/Session";
import Performance from "../screens/Performance";
import Profile from "../screens/Profile";
import Classes from "../screens/Classes";
import CategoriesDetails from "../screens/CategoriesDetails"; // Updated import
import OnlineYourClass from "../screens/OnlineYourClass"; // Updated import
import ScoreDetailsScreen from "../screens/ScoreDetailsScreen"; // Updated import
import WorkoutDetail from "../screens/WorkoutDetail"; // Updated import
import ClassDetail from "../screens/ClassDetail"; // Updated import
import CategoryExercises from "../screens/CategoryExercises"; // Updated import
import ExerciseDetail from "../screens/ExerciseDetail"; // Updated import

const Stack = createNativeStackNavigator();

const StudentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Base"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Session"
        component={Session}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Performance"
        component={Performance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Classes"
        component={Classes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoriesDetails" // Updated screen name
        component={CategoriesDetails} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnlineYourClass" // Updated screen name
        component={OnlineYourClass} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScoreDetailsScreen" // Updated screen name
        component={ScoreDetailsScreen} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkoutDetail" // Updated screen name
        component={WorkoutDetail} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClassDetail" // Updated screen name
        component={ClassDetail} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryExercises" // Updated screen name
        component={CategoryExercises} // Updated component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExerciseDetail" // Updated screen name
        component={ExerciseDetail} // Updated component
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;

const styles = StyleSheet.create({});
