import React from "react";
import { LogBox, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@ui-kitten/components";

import AuthNavigator from "./AuthNavigator";

import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./RootNavigation";
import Loading from "./Loading";
import Intro from "screens/splash";
import DrawerNavigator from "./DrawerNavigator";

enableScreens();

interface AppContainerProps {
  cachedResources: boolean;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer: React.FC<AppContainerProps> = ({ cachedResources }) => {
  const themes = useTheme();

  React.useEffect(() => {
    const stopAutoHideSplash = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };
    stopAutoHideSplash();
  }, []);

  const hiddenLoading = cachedResources;

  if (!hiddenLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <View
        style={{ backgroundColor: themes["background-basic-color-1"], flex: 1 }}
      >
        <Stack.Navigator
          initialRouteName={"Intro"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
