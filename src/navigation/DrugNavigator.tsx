import React from "react";
import { DrugStackParamList } from "./types";
import { createStackNavigator } from "@react-navigation/stack";
import DrugsScreen from "screens/main/Drugs/DrugsScreen";
import DrugsList from "screens/main/Drugs/DrugsList";
import DrugsNews from "screens/main/Drugs/DrugsNews";

const Stack = createStackNavigator<DrugStackParamList>();

const DrugNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrugsScreen" component={DrugsScreen} />
      <Stack.Screen name="DrugsNews" component={DrugsNews} />
      <Stack.Screen name="DrugsList" component={DrugsList} />
    </Stack.Navigator>
  );
};

export default DrugNavigator;
