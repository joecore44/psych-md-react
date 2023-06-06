import React from "react";
import { StyleSheet, ActivityIndicator, FlatList, View } from "react-native";
import { Calendar, useTheme } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, VStack } from "components";
import dayjs from "dayjs";
import ResultCalendar, { ResultCalendarProps } from "elements/ResultCalendar";
import { DATA_DOCTOR } from "constants/data";
import { DrawerStackParamList } from "navigation/types";

const AppointmentCalendarScreen = React.memo(() => {
  const theme = useTheme();
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { width, top } = useLayout();

  const [data, setData] = React.useState(DATA_CALENDAR);
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const refDate = React.useRef<Calendar>(null);
  const max = new Date(dayjs().year() + 1, 1, 1);
  const min = new Date(dayjs().year() - 1, dayjs().month() - 1, 1);

  const renderItem = React.useCallback(
    ({ item }: { item: ResultCalendarProps }) => {
      return (
        <VStack mt={24}>
          <ResultCalendar item={item} onPress={handlePressItem} />
        </VStack>
      );
    },
    []
  );

  const handlePressItem = () => {
    navigate("AppointmentDetails");
  };

  const ListHeaderComponent = React.useCallback(() => {
    return <View></View>;
  }, [date, refDate]);
  const ListEmptyComponent = () => {
    return <ActivityIndicator color={theme["text-info-color"]} size="large" />;
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Calendar
        ref={refDate}
        date={date}
        min={new Date(min)}
        max={new Date(max)}
        onSelect={(e) => setDate(e)}
        style={{
          backgroundColor: theme["text-info-color"],
          width: width,
          flex: 1,
          paddingTop: top + 8,
        }}
      />
      <FlatList
        data={data}
        refreshing={loading}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
});

export default AppointmentCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textDay: {
    fontSize: 14,
    lineHeight: 32,
    textAlign: "center",
  },
  contentContainerStyle: {
    paddingBottom: 40,
  },
});
const DATA_CALENDAR: ResultCalendarProps[] = [
  {
    id: "14",
    time: {
      start: new Date(),
      end: new Date(),
    },
    title: "Periodic health checks",
    doctor: DATA_DOCTOR[0],
  },
  {
    id: "13",
    time: {
      start: new Date(),
      end: new Date(),
    },
    title: "Periodic health checks",
    doctor: DATA_DOCTOR[1],
  },
  {
    id: "12",
    time: {
      start: new Date(),
      end: new Date(),
    },
    title: "Treating Neck",
    doctor: DATA_DOCTOR[2],
  },
  {
    id: "11",
    time: {
      start: new Date(),
      end: new Date(),
    },
    title: "Periodic health checks",
    doctor: DATA_DOCTOR[0],
  },
];
