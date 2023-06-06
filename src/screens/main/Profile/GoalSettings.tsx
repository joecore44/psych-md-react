import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Container, Header, NavigationAction, Text, VStack } from "components";
import GoalProgress, { GoalProgressProps } from "elements/GoalProgress";
import keyExtractor from "utils/keyExtractor";

const GoalSettings = React.memo(() => {

  const renderItem = ({ item }: { item: GoalProgressProps }) => {
    return <GoalProgress item={item} />;
  };
  const ListHeaderComponent = () => {
    return (
      <VStack ml={16}>
        <Text category="t2-sb" status="platinum">
          Total Goal
        </Text>
        <Text status="info" style={styles.textGoal}>
          49.7
          <Text status="info" category="header">
            %
          </Text>
        </Text>
      </VStack>
    );
  };
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Header
        title="Goal Settings"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
        ListHeaderComponent={ListHeaderComponent}
      />
    </Container>
  );
});

export default GoalSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  textGoal: {
    fontSize: 96,
    lineHeight: 144,
    fontFamily: "Poppins-SemiBold",
  },
});
const DATA: GoalProgressProps[] = [
  {
    title: "Desinfectant",
    goal: {
      total: 120,
      goalDone: 89,
    },
    measure: "bpm",
    icon: "disinfectant",
  },
  {
    title: "Desinfectant",
    goal: {
      total: 120,
      goalDone: 89,
    },
    measure: "bpm",
    icon: "transfusion",
  },
  {
    title: "Desinfectant",
    goal: {
      total: 100,
      goalDone: 69,
    },
    measure: "weight",
    icon: "weight",
  },
  {
    title: "Desinfectant",
    goal: {
      total: 120,
      goalDone: 89,
    },
    measure: "bpm",
    icon: "disinfectant",
  },
];
