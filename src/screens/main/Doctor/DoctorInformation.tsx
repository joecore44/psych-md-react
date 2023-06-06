import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TopNavigation, useTheme } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { shadowStyle } from "style/globalStyle";
import { DrawerStackParamList } from "navigation/types";

const DoctorInformation = React.memo(() => {
  const theme = useTheme();
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { height, width, top, bottom } = useLayout();

  const InformationField = ({
    title,
    describer,
  }: {
    title: string;
    describer: string;
  }) => {
    return (
      <VStack style={styles.informationField} level="1">
        <Text category="t4-sb" marginBottom={4}>
          {title}
        </Text>
        <Text category="s1" status="platinum">
          {describer}
        </Text>
      </VStack>
    );
  };
  return (
    <Container style={styles.container}>
      <Header
        title="Information"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <InformationField
          title="About"
          describer="If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping"
        />
        <InformationField
          title="Address & Timing"
          describer={`070 Heaney Lakes Suite 380 \n9:00 - 17:00, Monday to Friday`}
        />
        <InformationField
          title="Phone"
          describer={`+012 345 6789 \n+098 765 4321`}
        />
        <InformationField title="Certificate" describer={`AAMA \nABMS`} />
      </Content>
    </Container>
  );
});

export default DoctorInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  informationField: {
    borderRadius: 8,
    marginBottom: 24,
    marginHorizontal: 24,
    ...shadowStyle.shadow,
    padding: 16,
  },
});
