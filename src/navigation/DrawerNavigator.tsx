import React from "react";
import MainBottomTab from "./MainBottomTab";
import { DrawerStackParamList } from "./types";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import AppointmentCalendar from "screens/main/Root/AppointmentCalendar";
import AppointmentDetailsScreen from "screens/main/Root/AppointmentDetails";
import AppointmentScreen from "screens/main/Root/AppointmentScreen";
import FindScreen from "screens/main/Root/FindScreen";
import ResultFindScreen from "screens/main/Root/ResultFind";
import ServicePriceScreen from "screens/main/Root/ServicePriceScreen";
import NotificationScreen from "screens/main/Root/NotificationScreen";
import MapDoctorScreen from "screens/main/Root/MapDoctor";
import DoctorProfile from "screens/main/Doctor/DoctorProfile";
import ChatScreen from "screens/main/Root/ChatScreen";
import CallScreen from "screens/main/Root/CallScreen";
import BookAppointment from "screens/main/Root/BookAppointment";
import { TouchableOpacity, View } from "react-native";
import { FocusAwareStatusBar, VStack } from "components";
import IndicatorSetting from "screens/main/Dashboard/IndicatorSetting";
import IndicatorDetails from "screens/main/Dashboard/IndicatorDetails";
import IndicatorTestInput from "screens/main/Dashboard/IndicatorTestInput";
import IndicatorGoal from "screens/main/Dashboard/IndicatorGoal";
import DoctorsFavorites from "screens/main/Profile/DoctorsFavorites";
import GoalSettings from "screens/main/Profile/GoalSettings";
import InsurancesScreen from "screens/main/Profile/InsurancesScreen";
import DrugsShop from "screens/main/Drugs/DrugsShop";
import AddDrugsScreen from "screens/main/Drugs/AddDrugsScreen";
import DrugsShopDetails from "screens/main/Drugs/DrugsShopDetails";
import CartListScreen from "screens/main/Drugs/CartListScreen";
import BillingScreen from "screens/main/Drugs/BillingScreen";
import BookmarkNews from "screens/main/Root/BookmarkNews";
import NewsDetailsScreen from "screens/main/Root/NewsDetailsScreen";
import CommentScreen from "screens/main/Root/CommentScreen";
import { Text } from "components";
import { StyleSheet } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import { DATA_USER } from "constants/data";
import { Avatar, Layout } from "@ui-kitten/components";
import { useLayout } from "hooks";
import { navigate } from "./RootNavigation";
import { shadowStyle } from "style/globalStyle";

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export default function () {
  const dataUser = DATA_USER[0];
  const { top, width } = useLayout();
  const [activeTab, setActiveTab] = React.useState(0);

  const DATA_CONTENT = [
    {
      title: "Home",
      onPress: () => {
        navigate("Service");
      },
    },
    {
      title: "Drugs",
      onPress: () => {
        navigate("Service");
      },
    },
    {
      title: "Doctors",
      onPress: () => {
        navigate("Doctors");
      },
    },
    {
      title: "Services",
      onPress: () => {
        navigate("Service");
      },
    },
    {
      title: "Dashboard",
      onPress: () => {
        navigate("Dashboard");
      },
    },
    {
      title: "Profile",
      onPress: () => {
        navigate("Profile");
      },
    },
    {
      title: "News Healthly",
      onPress: () => {
        navigate("DrugsNews");
      },
    },
    {
      title: "Logout",
      onPress: () => {},
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          drawerType: "back",
          headerShown: false,
          drawerStyle: {
            width: width - 48,
          },
        }}
        drawerContent={(props) => {
          const isDrawerOpen = useDrawerStatus() === "open";
          return (
            <DrawerContentScrollView
              {...props}
              contentContainerStyle={styles.content}
            >
              <FocusAwareStatusBar
                barStyle={isDrawerOpen ? "dark-content" : "light-content"}
              />
              <VStack ml={40}>
                <Avatar
                  source={{ uri: dataUser.avatar.path }}
                  style={{ ...styles.avatar, marginTop: top }}
                />
                <Text category="t4-sb" marginTop={16}>
                  {dataUser.name}
                </Text>
                <Text category="s1" status="placeholder">
                  Balance: $1,359.00
                </Text>
              </VStack>
              <VStack mt={40}>
                {DATA_CONTENT.map((content, i) => {
                  const isActive = i === activeTab;
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        content.onPress();
                        setActiveTab(i);
                      }}
                      activeOpacity={0.7}
                      key={i}
                      style={styles.button}
                    >
                      <Layout
                        style={[
                          styles.indicator,
                          isActive && {
                            backgroundColor: "#82A0F6",
                            ...shadowStyle.shadowIndicator,
                          },
                        ]}
                      />
                      <Text uppercase status={isActive ? "info" : "platinum"}>
                        {content.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </VStack>
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen name="Main" component={MainBottomTab} />
        {/* -------------------- ServiceStack --------------------*/}
        <Drawer.Screen name="AppointmentScreen" component={AppointmentScreen} />
        <Drawer.Screen name="FindScreen" component={FindScreen} />
        <Drawer.Screen
          name="ServicePriceScreen"
          component={ServicePriceScreen}
        />
        <Drawer.Screen name="ResultFindScreen" component={ResultFindScreen} />
        <Drawer.Screen
          name="AppointmentCalendar"
          component={AppointmentCalendar}
        />
        <Drawer.Screen
          name="AppointmentDetails"
          component={AppointmentDetailsScreen}
        />
        <Drawer.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Drawer.Screen name="MapDoctorScreen" component={MapDoctorScreen} />
        <Drawer.Screen name="DoctorProfile" component={DoctorProfile} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
        <Drawer.Screen name="CallScreen" component={CallScreen} />
        <Drawer.Screen name="BookAppointment" component={BookAppointment} />
        <Drawer.Screen name="IndicatorSetting" component={IndicatorSetting} />
        <Drawer.Screen name="IndicatorDetails" component={IndicatorDetails} />
        <Drawer.Screen
          name="IndicatorTestInput"
          component={IndicatorTestInput}
        />
        <Drawer.Screen name="IndicatorGoal" component={IndicatorGoal} />
        <Drawer.Screen name="GoalSettings" component={GoalSettings} />
        <Drawer.Screen name="InsurancesScreen" component={InsurancesScreen} />
        <Drawer.Screen name="DoctorsFavorites" component={DoctorsFavorites} />
        <Drawer.Screen name="DrugsShop" component={DrugsShop} />
        <Drawer.Screen name="AddDrugsScreen" component={AddDrugsScreen} />
        <Drawer.Screen name="DrugsShopDetails" component={DrugsShopDetails} />
        <Drawer.Screen name="CartListScreen" component={CartListScreen} />
        <Drawer.Screen name="BillingScreen" component={BillingScreen} />
        <Drawer.Screen name="BookmarkNews" component={BookmarkNews} />
        <Drawer.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
        <Drawer.Screen name="CommentScreen" component={CommentScreen} />
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  button: {
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 6,
    height: 40,
    backgroundColor: "transparent",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginRight: 34,
  },
});
