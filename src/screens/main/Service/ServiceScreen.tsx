import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDrawer, useLayout } from "hooks";

import { Container, Content, HStack, NavigationAction, Text } from "components";
import { Images } from "assets/images";
import { HomeButton } from "elements";
import { DrawerStackParamList } from "navigation/types";
import { ServiceKey } from "constants/types";
import { MainStackParamList } from "constants/types";


const ServiceScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { top } = useLayout();
  const { openDrawer } = useDrawer();

  const user = { name: "Joe" };
  const handleFindProfile = () => {
    navigate("Profile");
  };
  const handleFindHospital = () => {
    navigate("FindScreen", { type: ServiceKey.FindHospital });
  };
  const handleCreateAppointment = () => {
    navigate("FindScreen", { type: ServiceKey.CreateAppointment });
  };
  const handleServicePrice = () => {
    navigate("ServicePriceScreen");
  };
  const handleNotification = () => {
    navigate("NotificationScreen");
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const DATA = [
    {
      title: "PeterMD",
      icon: "doctor",
      numOfAvailable: "men's health",
      onPress: handleFindProfile,
      color: '#FF5733',
    },
    {
      title: "PetraMD",
      icon: "search",
      numOfAvailable: "women's health",
      onPress: handleFindHospital,
      color: '#412e3e',
    },
    {
      title: "PsychMD",
      icon: "price",
      numOfAvailable: "mental health",
      onPress: handleServicePrice,
      color: '#353b64',
    },
    {
      title: "Schedule",
      icon: "appointment",
      numOfAvailable: "an appointment",
      onPress: handleCreateAppointment,
      color: '#FF5733',
    }
  ];
  return (
    <Container style={styles.container} useSafeArea={false}>
      <HStack
        justify="space-between"
        style={[styles.header, { paddingTop: top + 12 }]}
      >
        <NavigationAction
          icon="menu"
          status="white"
          marginRight={32}
          onPress={openDrawer}
        />
        <Image source={Images.logo} />
        <HStack>
          <NavigationAction icon="email" marginRight={16} status="white" />
          <NavigationAction icon="notification" status="white" onPress={handleNotification} />
        </HStack>
      </HStack>
      <Content contentContainerStyle={styles.contentContainerStyle}> 
        <Text
          category="header-sb"
          marginTop={40}
          marginBottom={12}
          marginHorizontal={20}
        >
          Hello {user.name},
        </Text>
        <Text category="t1" status="platinum" uppercase marginHorizontal={20}>
         Welcome to the Family!
        </Text>
        <View style={styles.content}>
          {DATA.map((item, i) => {
            return (
              <HomeButton
                key={i}
                title={item.title}
                icon={item.icon}
                numOfAvailable={item.numOfAvailable}
                onPress={() => {
                  item.onPress();
                  setSelectedIndex(i);
                }}
                hightLight={i === 3}
                color={item.color}
              />
            );
          })}
        </View>
      </Content>
    </Container>
  );
});

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#404040",
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 48,
  },
});
