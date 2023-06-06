import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { DATA_NOTIFICATION } from "constants/data";
import { INotificationProps, Notification_Key } from "constants/types";
import { shadowStyle } from "style/globalStyle";
import dayjs from "utils/dayjs";
import keyExtractor from "utils/keyExtractor";
const NotificationScreen = React.memo(() => {
  const { goBack } = useNavigation();
  const { width } = useLayout();

  const [dataNotification, setData] = React.useState(DATA_NOTIFICATION);
  const renderItem = React.useCallback(
    ({ item }: { item: INotificationProps }) => {
      return (
        <HStack style={styles.item} level="1" justify="flex-start">
          {item.type === Notification_Key.Medic && (
            <Icon pack="assets" name="drug" />
          )}
          {item.type === Notification_Key.Meet && (
            <Icon pack="assets" name="list" />
          )}
          {item.type === Notification_Key.Message && (
            <Icon pack="assets" name="doctor" />
          )}
          <VStack ml={24}>
            <Text
              category="t4"
              maxWidth={238 * (width / 375)}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <Text category="s1" status="platinum">
              {dayjs(item.createAt).fromNow()}
            </Text>
          </VStack>
        </HStack>
      );
    },
    []
  );
  return (
    <Container style={styles.container}>
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title="Notification"
      />
      <FlatList
        data={dataNotification}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
      />
    </Container>
  );
});

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  item: {
    ...shadowStyle.shadowBtn,
    marginBottom: 24,
    borderRadius: 8,
    padding: 16,
  },
});
