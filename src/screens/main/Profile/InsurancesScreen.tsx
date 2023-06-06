import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Header, NavigationAction, Text } from "components";
import InsurancesItem, { InsurancesItemProps } from "elements/IsurancesItem";
import { DATA_USER } from "constants/data";
import keyExtractor from "utils/keyExtractor";

const InsurancesScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const renderItem = ({ item }: { item: InsurancesItemProps }) => {
    return <InsurancesItem item={item} />;
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Insurances"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default InsurancesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});
const DATA: InsurancesItemProps[] = [
  {
    groupId: "24-789",
    enrolleeId: "VMH9231458760",
    user: DATA_USER[0],
    dateEffective: new Date(),
    plan: "Pro",
    title: "Personal Insurances",
  },
  {
    groupId: "24-789",
    enrolleeId: "VMH9231458760",
    user: DATA_USER[0],
    dateEffective: new Date(),
    plan: "Pro",
    title: "Personal Insurances",
  },
  {
    groupId: "24-789",
    enrolleeId: "VMH9231458760",
    user: DATA_USER[0],
    dateEffective: new Date(),
    plan: "Pro",
    title: "Personal Insurances",
  },
  {
    groupId: "24-789",
    enrolleeId: "VMH9231458760",
    user: DATA_USER[0],
    dateEffective: new Date(),
    plan: "Pro",
    title: "Personal Insurances",
  },
  {
    groupId: "24-789",
    enrolleeId: "VMH9231458760",
    user: DATA_USER[0],
    dateEffective: new Date(),
    plan: "Pro",
    title: "Personal Insurances",
  },
];
