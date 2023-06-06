import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { Content, HStack, LinearButton, ScrollPicker, Text } from "components";
import { DATA_DAY, DATA_MONTH, DATA_YEAR } from "constants/data";

interface ISelectBirthdayProps {
  onChangeValue: (e: string | React.ChangeEvent<any>) => void;
  _onNext?(): void;
}

const SelectBirthday = React.memo(
  ({ onChangeValue, _onNext }: ISelectBirthdayProps) => {
    const [activeMonth, setActiveMonth] = React.useState(DATA_MONTH[4]);
    const [activeDay, setActiveDay] = React.useState(10);
    const [activeYear, setActiveYear] = React.useState(DATA_YEAR[4]);
    const [dataDays, setDataDays] = React.useState(DATA_DAY);
    const [birthday, SelectBirthday] = React.useState("");

    React.useEffect(() => {
      function getDaysInMonth(year: number, month: number) {
        return new Date(year, month, 0).getDate();
      }
      const month = DATA_MONTH.findIndex((e) => e === activeMonth);
      const numberDayInMonth = getDaysInMonth(activeYear, month + 1);
      const days =
        numberDayInMonth === 31
          ? DATA_DAY
          : DATA_DAY.slice(0, -(DATA_DAY.length - numberDayInMonth));
      setDataDays(days);

      SelectBirthday(
        `${activeYear}-${month <= 9 ? `0${month + 1}` : month + 1}-${activeDay}`
      );
    }, [activeYear, activeMonth, DATA_MONTH, DATA_DAY, activeDay]);

    const renderItem = React.useCallback(
      (data: string | number, index: number, isSelected: boolean) => {
        return (
          <HStack key={index}>
            <Text
              uppercase
              category="t2"
              status={isSelected ? "basic" : "platinum"}
            >
              {data}
            </Text>
          </HStack>
        );
      },
      []
    );
    React.useEffect(() => {
      onChangeValue(birthday);
    }, [birthday]);
    return (
      <Layout style={styles.container}>
        <Text uppercase category="t4-sb" status="platinum" marginLeft={36} marginBottom={32}>
          Your Birthday
        </Text>
        <Content
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.contentContainer}
        >
          <ScrollPicker
            contentContainerStyle={styles.containerMonth}
            containerStyle={styles.scrollPickerContainer}
            dataSource={DATA_MONTH}
            selectedIndex={4}
            renderItem={renderItem}
            onValueChange={(data) => {
              setActiveMonth(data.toString());
            }}
            wrapperColor="transparent"
            itemHeight={72}
            highlightColor="#82A0F6"
            highlightBorderWidth={36}
          />
          <ScrollPicker
            containerStyle={styles.scrollPickerContainer}
            dataSource={dataDays}
            selectedIndex={activeDay}
            renderItem={renderItem}
            onValueChange={(data) => {
              setActiveDay(Number(data));
            }}
            wrapperColor="transparent"
            itemHeight={72}
            highlightColor="#82A0F6"
            highlightBorderWidth={36}
          />
          <ScrollPicker
            containerStyle={styles.scrollPickerContainer}
            dataSource={DATA_YEAR}
            selectedIndex={4}
            renderItem={renderItem}
            onValueChange={(data) => {
              setActiveYear(Number(data));
            }}
            wrapperColor="transparent"
            itemHeight={72}
            highlightColor="#82A0F6"
            highlightBorderWidth={36}
          />
        </Content>
        <LinearButton title="NEXT" onPress={_onNext} style={styles.button} />
      </Layout>
    );
  }
);

export default SelectBirthday;

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
