import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParamList } from "./types";
import DashboardScreen from "screens/main/Dashboard/DashboardScreen";
import ProfileScreen from "screens/main/Profile/ProfileScreen";
import ServiceScreen from "screens/main/Service/ServiceScreen";
import { Icon, useTheme } from "@ui-kitten/components";
import { VStack } from "components";
import { shadowStyle } from "style/globalStyle";
import DoctorNavigator from "./DoctorNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import DrugNavigator from "./DrugNavigator";

const Tab = createBottomTabNavigator<MainStackParamList>();

export default function () {
  const theme = useTheme();
  const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();
  const CustomIcon = React.useCallback(
    ({ isActive, name }: { isActive: boolean; name: string }) => {
      return (
        <VStack pv={4}>
          <Icon
            pack="assets"
            name={name}
            style={{
              tintColor: isActive
                ? theme["text-info-color"]
                : theme["text-platinum-color"],
            }}
          />
        </VStack>
      );
    },
    []
  );
  return (
    <Tab.Navigator
      initialRouteName="Service"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Drugs"
        component={DrugNavigator}
        options={{
          tabBarIcon: (props) => (
            <TouchableOpacity
              onPress={() => {
                navigate("Drugs", { screen: "DrugsScreen" });
              }}
            >
              <Icon
                pack="assets"
                name="drugs"
                style={{ tintColor: props.color }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorNavigator}
        options={{
          tabBarIcon: (props) => (
            <TouchableOpacity
              onPress={() => {
                navigate("Doctors", { screen: "DoctorScreen" });
              }}
            >
              <Icon
                pack="assets"
                name="doctor"
                style={{ tintColor: props.color }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <VStack style={shadowStyle.shadowBtn}>
                <Icon
                  pack="assets"
                  name={props.focused ? "serviceActive" : "service"}
                  style={styles.service}
                />
              </VStack>
            );
          },
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: (props) => (
            <CustomIcon name="dashboard" isActive={props.focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => (
            <CustomIcon name="profile" isActive={props.focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    marginBottom: 4,
    backgroundColor: "#F3F6FE",
  },
  service: {
    width: 60,
    height: 60,
    zIndex: 100,
    marginTop: -30,
  },
});
