import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  Avatar,
  Icon,
  Layout,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
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
import { shadowStyle } from "style/globalStyle";
import OrderServices from "elements/OrderServices";

const AppointmentDetailsScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const doctor = DATA_DOCTOR[0];

  return (
    <Container style={styles.container}>
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title="Appointment Details"
        accessoryRight={<NavigationAction status="white" icon="edit" />}
      />
      <Content contentContainerStyle={styles.contentContainer}>
        <HStack style={styles.doctor} level="1" justify="flex-start" mb={24}>
          <Avatar source={{ uri: doctor.avatar.path }} size="medium" />
          <VStack ml={12} mv={6}>
            <Text category="t4-sb">John Smith</Text>
            <Text category="s1" status="platinum">
              Cardiologist
            </Text>
          </VStack>
        </HStack>
        <HStack style={styles.datetime} justify="flex-start" level="1" mb={24}>
          <Icon pack="assets" name="calendar" />
          <IDivider appearance="primary" marginHorizontal={16} />
          <Text>Jan 01, 2017</Text>
        </HStack>
        <HStack style={styles.datetime} justify="flex-start" level="1" mb={24}>
          <Icon pack="assets" name="clock" />
          <IDivider appearance="primary" marginHorizontal={16} />
          <Text>12:00AM - 02:30PM</Text>
        </HStack>
        <OrderServices
          services={[
            { name: "Overall examination", price: 150, time: "55 mins " },
            { name: "Blood tests", price: 243, time: "12 mins " },
          ]}
        />
      </Content>
      <LinearButton title="CANCEL APPOINTMENT" style={styles.button} />
    </Container>
  );
});

export default AppointmentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  doctor: {
    padding: 16,
    borderRadius: 8,
    ...shadowStyle.shadow,
  },
  datetime: {
    padding: 16,
    borderRadius: 8,
    ...shadowStyle.shadow,
  },
  button: {
    marginBottom: 8,
    ...shadowStyle.shadowBtn,
  },
});
