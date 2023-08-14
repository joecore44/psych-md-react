import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDrawer, useLayout } from "hooks";

import { Container, Content, HStack, NavigationAction, Text } from "components";
import { Images } from "assets/images";
import { HomeButton } from "elements";
import { DrawerStackParamList } from "navigation/types";
import { ServiceKey } from "constants/types";

const ServiceScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { top } = useLayout();
  const { openDrawer } = useDrawer();

  const user = { name: "Joe" };
  const handleFindDoctor = () => {
    navigate("FindScreen", { type: ServiceKey.FindDoctor });
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
      title: "Checkin",
      icon: "doctor",
      numOfAvailable: "with trip sitter",
      onPress: handleFindDoctor,
    },
    {
      title: "Treament",
      icon: "search",
      numOfAvailable: "options",
      onPress: handleFindHospital,
    },
    {
      title: "Schedule",
      icon: "appointment",
      numOfAvailable: "an appointment",
      onPress: handleCreateAppointment,
    },
    {
      title: "Health",
      icon: "price",
      numOfAvailable: "checkin",
      onPress: handleServicePrice,
    },
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
         Welcome to PsycMD
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
                hightLight={i === selectedIndex}
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
