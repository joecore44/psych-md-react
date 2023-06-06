import React from "react";
import { AuthStackParamList, CreateAccountParamList } from "./types";
import { createStackNavigator } from "@react-navigation/stack";
import BasicInformationScreen from "screens/auth/SignUp/BasicInformation";
import LoginScreen from "screens/auth/Login";
import SignUpScreen from "screens/auth/SignUp/SignUp";
import ForgotPasswordScreen from "screens/auth/ForgotPassword";
import VerifyScreen from "screens/auth/VerifyScreen";

const Stack = createStackNavigator<CreateAccountParamList>();

export function CreateAccountNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BasicInformation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="BasicInformation"
        component={BasicInformationScreen}
      />
    </Stack.Navigator>
  );
}

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={CreateAccountNavigator} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
