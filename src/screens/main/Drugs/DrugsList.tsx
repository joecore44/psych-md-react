import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Icon, useTheme } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  HStack,
  IDivider,
  NavigationAction,
  Text,
} from "components";
import keyExtractor from "utils/keyExtractor";
import { shadowStyle } from "style/globalStyle";
import { DrawerStackParamList } from "navigation/types";

const DrugsList = React.memo(() => {
  const theme = useTheme();
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const handleAddDrugs = () => {
    navigate("AddDrugsScreen");
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title="Current Medications"
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <HStack style={styles.item} level="1">
              <HStack justify="flex-start" itemsCenter>
                <Icon pack="assets" name="drugLogo" />
                <IDivider marginHorizontal={8} appearance="primary" />
                <Text category="t4">{item.title}</Text>
              </HStack>
              <Icon pack="assets" name="arrowRight" />
            </HStack>
          );
        }}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
      />
      <TouchableOpacity
        onPress={handleAddDrugs}
        style={[
          styles.buttonPlus,
          { backgroundColor: theme["text-info-color"] },
        ]}
      >
        <Text category="header" status="white">
          +
        </Text>
      </TouchableOpacity>
    </Container>
  );
});

export default DrugsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  item: {
    borderRadius: 8,
    marginBottom: 24,
    ...shadowStyle.shadowFade,
    paddingTop: 15,
    paddingBottom: 11,
    paddingHorizontal: 12,
  },
  buttonPlus: {
    position: "absolute",
    right: 20,
    bottom: 32,
    borderRadius: 99,
    paddingHorizontal: 12,
  },
});
const DATA = [
  {
    title: "Ketamine Troches (30mg)",
    id: "1",
  },
  {
    title: "Atorvistatin (80mg)",
    id: "2",
  },
  {
    title: "Testosterone C. (200mg)",
    id: "1a",
  },
  {
    title: "MK-677",
    id: "1b",
  },
  
];
