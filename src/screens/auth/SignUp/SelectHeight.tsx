import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { Content, HStack, LinearButton, ScrollPicker, Text } from "components";
import { ISelectScreenProps } from "constants/types";

const SelectHeight = React.memo(
  ({ _onNext, onChangeValue }: ISelectScreenProps) => {
    const [activeWeight, setActiveWeight] = React.useState(
      generateDataWeight[110]
    );
    const [activeUnit, setActiveUnit] = React.useState("CM");
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
    React.useEffect(() => {
      const value = `${activeWeight} ${activeUnit}`;
      onChangeValue(value);
    }, [activeWeight, activeUnit]);
    return (
      <Layout style={styles.container}>
        <Text uppercase category="t4-sb" status="platinum" marginLeft={36} marginBottom={32}>
          Your Height
        </Text>
        <Content
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.contentContainer}
        >
          <ScrollPicker
            contentContainerStyle={styles.containerMonth}
            containerStyle={styles.scrollPickerContainer}
            dataSource={generateDataWeight}
            selectedIndex={110}
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
            dataSource={["CM", "INCH"]}
            selectedIndex={0}
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
        <LinearButton
          title="NEXT"
          shadow
          onPress={_onNext}
          style={styles.button}
        />
      </Layout>
    );
  }
);

export default SelectHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 24,
  },
});
const maxWeight = 300;
const generateDataWeight = Array.from(Array(maxWeight + 1).keys()).slice(1);
