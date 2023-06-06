import React from "react";
import { DoctorStackParamList } from "./types";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorProfile from "screens/main/Doctor/DoctorProfile";
import DoctorScreen from "screens/main/Doctor/DoctorScreen";
import DoctorInformation from "screens/main/Doctor/DoctorInformation";
import DoctorReview from "screens/main/Doctor/DoctorReview";
import DoctorWorkAddress from "screens/main/Doctor/DoctorWorkAddress";

const Stack = createStackNavigator<DoctorStackParamList>();

const DoctorNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"DoctorScreen"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DoctorScreen" component={DoctorScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      <Stack.Screen name="DoctorInformation" component={DoctorInformation} />
      <Stack.Screen name="DoctorWorkAddress" component={DoctorWorkAddress} />
      <Stack.Screen name="DoctorReview" component={DoctorReview} />
    </Stack.Navigator>
  );
};

export default DoctorNavigator;
