import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Icon, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  LinearButton,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { DATA_DOCTOR } from "constants/data";
import dayjs from "dayjs";
import { shadowStyle } from "style/globalStyle";
import { Calendar } from "react-native-calendars";
import { Theme } from "react-native-calendars/src/types";
import keyExtractor from "utils/keyExtractor";

const BookAppointment = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const sizeAvatar = 120 * (width / 375);
  const doctor = DATA_DOCTOR[0];
  const refFlatList = React.useRef<FlatList>(null);
  const [dateSelected, setDateSelected] = React.useState<string>(
    dayjs(new Date()).format("YYYY-MM-DD").toString()
  );
  const [markedDates, setMarkedDates] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const viewAbilityConfig = {
    viewAreaCoveragePercentThreshold: 150,
  };
  React.useEffect(() => {
    refFlatList.current?.scrollToItem({
      item: selectedTime,
      animated: true,
      viewPosition: 0.5,
    });
  }, [refFlatList, selectedTime]);

  const customTheme: Theme = {
    calendarBackground: theme["background-basic-color-1"],
    selectedDayBackgroundColor: "#558FC6",
    textDayFontFamily: "Poppins-Regular",
    textDayHeaderFontWeight: "500",
    textDayFontWeight: "500",
    textDayHeaderFontSize: 12,
    textDayFontSize: 14,
    textDayHeaderFontFamily: "Poppins-Regular",
    textMonthFontSize: 14,
    textMonthFontWeight: "500",
    todayBackgroundColor: theme["text-success-color"],
    todayTextColor: theme["text-basic-color"],
    arrowWidth: 12,
    arrowHeight: 12,
  };

  const min = dayjs(new Date()).format("YYY");

  const handleMessage = () => {};
  const handleCall = () => {};
  const _handleBook = () => {};
  const handleSelectTime = (time: string) => () => {
    setSelectedTime(time);
  };

  const renderItem = ({ item }: { item: string }) => {
    const isActive = item === selectedTime;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          marginHorizontal: 8,
          backgroundColor: isActive ? "#558FC6" : "white",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 6,
          ...shadowStyle.shadowBtn,
          marginBottom: 40,
        }}
        onPress={handleSelectTime(item)}
      >
        <Text status={isActive ? "white" : "primary"}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Container style={styles.container}>
      <Header
        title="Book Appointment"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <HStack itemsCenter mh={24}>
          <VStack level="4" style={styles.buttonCall} onPress={handleCall}>
            <Icon
              pack="assets"
              name="phone"
              style={{ tintColor: theme["color-basic-100"] }}
            />
          </VStack>
          <Avatar
            source={{ uri: doctor.avatar.path }}
            style={{ width: sizeAvatar, height: sizeAvatar }}
          />

          <VStack
            onPress={handleMessage}
            style={[
              styles.buttonMessage,
              {
                borderColor: theme["text-placeholder-color"],
              },
            ]}
          >
            <Icon
              pack="assets"
              name="message"
              style={{ tintColor: theme["text-placeholder-color"] }}
            />
          </VStack>
        </HStack>
        <Text center marginBottom={16} marginTop={12} category="t4-sb">
          {doctor.name}
        </Text>
        <Calendar
          current={dateSelected}
          onDayPress={(day) => {
            setMarkedDates(day.dateString);
            setDateSelected(day.dateString);
          }}
          minDate={min}
          headerStyle={styles.headerCalendar}
          initialDate={new Date().toDateString()}
          customHeaderTitle={
            <Text category="t4" status="basic">
              {dayjs(new Date()).format("MMMM YYYY")}
            </Text>
          }
          style={styles.calendar}
          enableSwipeMonths={false}
          markedDates={{
            [markedDates]: {
              selected: true,
              customStyles: {
                container: {
                  width: 32,
                  height: 32,
                },
              },
            },
          }}
          theme={customTheme}
        />
        <FlatList
          horizontal
          ref={refFlatList}
          data={MEETING_OPTION}
          renderItem={renderItem}
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          viewabilityConfig={viewAbilityConfig}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentTime}
        />
      </Content>
      <LinearButton
        title="BOOK NOW"
        onPress={_handleBook}
        style={styles.bookButton}
      />
    </Container>
  );
});

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  buttonCall: {
    padding: 16,
    borderRadius: 99,
    ...shadowStyle.shadowBtn,
  },
  buttonMessage: {
    padding: 15,
    borderRadius: 99,
    borderWidth: 0.7,
  },
  calendar: {
    ...shadowStyle.shadow,
    borderRadius: 6,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  headerCalendar: {
    backgroundColor: "#558FC6",
    marginHorizontal: -6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  contentTime: {
    paddingHorizontal: 16,
  },
  bookButton: {
    marginBottom: 8,
  },
});

const MEETING_OPTION = [
  "10:00 AM",
  "11:30 AM",
  "12:00 PM",
  "01:20 PM",
  "02:30 PM",
  "03:30 PM",
  "04:00 PM",
  "05:00 PM",
];
