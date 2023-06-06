import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Avatar, useTheme } from "@ui-kitten/components";
import { useLayout } from "hooks";

import {
  Container,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { IUserProps } from "constants/types";
import { DATA_USER } from "constants/data";
import { shadowStyle } from "style/globalStyle";
import dayjs from "dayjs";
export interface CommentProps {
  user: IUserProps;
  createAt: Date;
  comment: string;
}
const CommentScreen = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Header
        title="Comment"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        contentContainerStyle={styles.content}
        scrollEventThrottle={16}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <VStack style={styles.item} level="1">
              <HStack itemsCenter>
                <HStack justify="flex-start" itemsCenter mb={8}>
                  <Avatar
                    source={{ uri: item.user.avatar.path }}
                    size="small"
                  />
                  <Text
                    category="t5-sb"
                    marginLeft={8}
                    maxWidth={153 * (width / 375)}
                  >
                    {item.user.name}
                  </Text>
                </HStack>
                <Text
                  category="s1"
                  status="placeholder"
                  numberOfLines={1}
                  maxWidth={120 * (width / 375)}
                >
                  {dayjs(item.createAt).fromNow()}
                </Text>
              </HStack>
              <Text status="platinum">{item.comment}</Text>
            </VStack>
          );
        }}
      />
    </Container>
  );
});

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  item: {
    ...shadowStyle.shadowFade,
    padding: 16,
    marginBottom: 24,
    borderRadius: 8,
  },
});
const DATA: CommentProps[] = [
  {
    user: DATA_USER[0],
    createAt: new Date(),
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    user: DATA_USER[1],
    createAt: new Date(2022, 9, 18),
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    user: DATA_USER[2],
    createAt: new Date(),
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    user: DATA_USER[3],
    createAt: new Date(),
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    user: DATA_USER[0],
    createAt: new Date(),
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
];
