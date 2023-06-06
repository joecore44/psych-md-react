import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { HStack, Text, VStack } from "components";
import dayjs from "dayjs";
import { Avatar, useTheme } from "@ui-kitten/components";
import { IDoctorProps } from "constants/types";
import { shadowStyle } from "style/globalStyle";

export interface ResultCalendarProps {
  id: string;
  time: {
    start: Date;
    end: Date;
  };
  title: string;
  doctor: IDoctorProps;
}

const ResultCalendar = memo(
  ({ item, onPress }: { item: ResultCalendarProps; onPress?(): void }) => {
    const theme = useTheme();
    return (
      <HStack
        style={styles.item}
        justify="space-between"
        onPress={onPress}
        level="1"
      >
        <View
          style={[
            styles.indicator,
            { backgroundColor: theme["text-info-color"] },
          ]}
        />
        <VStack>
          <Text category="t5-sb">{item.title}</Text>
          <Text category="s1">
            {dayjs(item.time.start).format("HH:mm A")} -{" "}
            {dayjs(item.time.end).format("HH:mm A")}
          </Text>
        </VStack>
        <Avatar source={{ uri: item.doctor.avatar.path }} size="small" />
      </HStack>
    );
  }
);

export default ResultCalendar;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...shadowStyle.shadow,
    marginHorizontal: 24,
    borderRadius: 8,
  },
  indicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 1,
    marginVertical: 16,
  },
});
