import React from "react";
import { StyleSheet } from "react-native";
import { TopNavigation } from "@ui-kitten/components";

import {
  Container,
  Content,
  Text,
  LinearButton,
  NavigationAction,
  ScrollPicker,
  HStack,
} from "components";
import { useLayout } from "hooks";

const IndicatorGoal = React.memo(() => {
  const { height } = useLayout();
  const [activeWeight, setActiveWeight] = React.useState(
    generateDataWeight[80]
  );
  const [activeUnit, setActiveUnit] = React.useState("KG");
  const renderItem = React.useCallback(
    (data: string | number, index: number, isSelected: boolean) => {
      return (
        <HStack key={index}>
          <Text
            uppercase
            category="t2"
            status={isSelected ? "basic" : "platinum"}
          >
            {data.toString()}
          </Text>
        </HStack>
      );
    },
    []
  );
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction marginLeft={16} />}
        title="Goal"
        accessoryRight={
          <Text status="info" marginRight={16}>
            Cancel
          </Text>
        }
      />
      <Text
        category="t4-sb"
        uppercase
        marginLeft={16}
        marginBottom={40}
        marginTop={24}
      >
        Set Your Goal
      </Text>
      <Content contentContainerStyle={styles.contentContainer} horizontal>
        <ScrollPicker
          contentContainerStyle={styles.containerMonth}
          containerStyle={styles.scrollPickerContainer}
          dataSource={generateDataWeight}
          selectedIndex={80}
          wrapperHeight={500 * (height / 812)}
          renderItem={renderItem}
          onValueChange={(data, activeIndex) => {
            setActiveWeight(activeIndex + 1);
          }}
          wrapperColor="transparent"
          itemHeight={72}
          highlightColor="#82A0F6"
          highlightBorderWidth={36}
        />
        <ScrollPicker
          contentContainerStyle={styles.containerMonth}
          containerStyle={styles.scrollPickerContainer}
          dataSource={["KG", "LB"]}
          selectedIndex={0}
          wrapperHeight={500 * (height / 812)}
          renderItem={renderItem}
          onValueChange={(data, activeIndex) => {
            setActiveUnit(["CM", "INCH"][activeIndex]);
          }}
          wrapperColor="transparent"
          itemHeight={72}
          highlightColor="#82A0F6"
          highlightBorderWidth={36}
        />
      </Content>
      <LinearButton title="CREATE" style={styles.button} />
    </Container>
  );
});

export default IndicatorGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 24,
  },
  contentContainer: {
    flexGrow: 1,
  },
  scrollPickerContainer: {
    flexGrow: 1,
  },
  containerMonth: {
    marginLeft: 4,
    flexGrow: 1,
  },
  button: {
    marginBottom: 12,
  },
});
const maxWeight = 250;
const generateDataWeight = Array.from(Array(maxWeight + 1).keys()).slice(1);
