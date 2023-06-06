import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import { ScrollPicker, LinearButton, Text, Content, HStack } from "components";
import { DATA_PICK_GENDER } from "constants/data";
import { useLayout } from "hooks";
import { ISelectScreenProps } from "constants/types";

const SelectGender = React.memo(
  ({ _onNext, onChangeValue }: ISelectScreenProps) => {
    const { width } = useLayout();
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
      if (activeIndex === 0) {
        onChangeValue(DATA_PICK_GENDER[0]);
      }
    }, [activeIndex, DATA_PICK_GENDER]);
    return (
      <Layout style={styles.container}>
        <Content scrollEnabled={false}>
          <Text
            uppercase
            category="t4-sb"
            marginLeft={36}
            marginBottom={32}
            children="your gender"
            status="platinum"
          />
          <ScrollPicker
            containerStyle={styles.scrollPickerContainer}
            dataSource={DATA_PICK_GENDER}
            selectedIndex={activeIndex}
            renderItem={(data, index) => {
              return (
                <HStack key={index} minWidth={width}>
                  <Text
                    uppercase
                    marginLeft={36}
                    category="t2"
                    status={activeIndex === index ? "basic" : "platinum"}
                  >
                    {data}
                  </Text>
                </HStack>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              setActiveIndex(selectedIndex);
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

export default SelectGender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollPickerContainer: {
    flex: 1,
  },
  button: {
    marginBottom: 24,
  },
});
