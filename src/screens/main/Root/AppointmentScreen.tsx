import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TopNavigation, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Content, Header, NavigationAction, Text } from "components";

const AppointmentScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  return (
    <Container>
      {/* <Header accessoryLeft={<NavigationAction />} /> */}
      <Content>
        <Text>AppoimentScreen</Text>
      </Content>
    </Container>
  );
});

export default AppointmentScreen;

const styles = StyleSheet.create({});
