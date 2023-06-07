import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Icon, useTheme } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  IDivider,
  LinearButton,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { DATA_DOCTOR } from "constants/data";
import { globalStyle, shadowStyle } from "style/globalStyle";
import { DrawerStackParamList, MainStackParamList } from "navigation/types";
import { ProfileButton } from "elements";

const DoctorProfile = React.memo(() => {
  const theme = useTheme();
  const { navigate: _handleNavigate } =
    useNavigation<NavigationProp<DrawerStackParamList>>();
  const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();
  const { width, top } = useLayout();
  const doctor = DATA_DOCTOR[0];

  const sizeAvatar = 160 * (width / 375);

  

  const handleMessage = () => {
    _handleNavigate("ChatScreen");
  };
  const handleCall = () => {
    _handleNavigate("CallScreen");
  };
  const handleWorkAddress = () => {
    navigate("Doctors", { screen: "DoctorWorkAddress" });
  };
  const handleInformation = () => {
    navigate("Doctors", { screen: "DoctorInformation" });
  };
  const handleReview = () => {
    navigate("Doctors", { screen: "DoctorReview" });
  };
  const _handleBookAppointment = () => _handleNavigate("BookAppointment");

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Your Trip Sitter"
        style={{ paddingTop: top + 8 }}
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.contentStyle}>
        <HStack itemsCenter>
          <VStack level="4" style={styles.buttonCall} onPress={handleCall}>
            <Icon
              pack="assets"
              name="phone"
              style={{ tintColor: theme["color-basic-100"] }}
            />
          </VStack>
          <Avatar
            source={{ uri: doctor.avatar.path }}
            style={{ width: sizeAvatar, height: sizeAvatar }}
          />
          <VStack
            onPress={handleMessage}
            style={[
              styles.buttonMessage,
              {
                borderColor: theme["text-placeholder-color"],
              },
            ]}
          >
            <Icon
              pack="assets"
              name="message"
              style={{ tintColor: theme["text-placeholder-color"] }}
            />
          </VStack>
        </HStack>
        <VStack itemsCenter mt={16} mb={24}>
          <Text category="t5-sb">{doctor.name}</Text>
          <Text category="s1" status="placeholder">
            {doctor.industry}
          </Text>
          <HStack justify="flex-start" itemsCenter>
            <Icon pack="assets" name="star" style={styles.star} />
            <Text status="info" marginLeft={4} marginRight={8}>
              {doctor.rate.rateStar}
            </Text>
            <Text status="platinum" marginTop={4}>
              ({doctor.rate.reviewer} reviews)
            </Text>
          </HStack>
        </VStack>
        <LinearButton
          title="BOOK APPOINTMENT"
          onPress={_handleBookAppointment}
        />
        <ProfileButton
          title="Personal Information"
          icon="user"
          onPress={handleInformation}
        />
        <ProfileButton
          title="Work Address"
          icon="hospital"
          onPress={handleWorkAddress}
        />
        <ProfileButton title="Reviews" icon="star" onPress={handleReview} />
      </Content>
    </Container>
  );
});

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentStyle: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  buttonCall: {
    padding: 16,
    borderRadius: 99,
  },
  buttonMessage: {
    padding: 15,
    borderRadius: 99,
    borderWidth: 0.7,
  },
  star: {
    width: 16,
    height: 16,
  },

});
