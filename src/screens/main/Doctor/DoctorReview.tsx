import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Avatar, Icon, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Text,
  Header,
  NavigationAction,
  VStack,
  HStack,
} from "components";
import keyExtractor from "utils/keyExtractor";
import { IUserProps } from "constants/types";
import { DATA_USER } from "constants/data";
import { globalStyle, shadowStyle } from "style/globalStyle";
import dayjs from "dayjs";

interface IReviewProps {
  id: string;
  createdAt: Date;
  user: IUserProps;
  rate: number;
  comment: string;
}

const DoctorReview = React.memo(() => {
  const theme = useTheme();
  const [data, setData] = React.useState<IReviewProps[]>(DATA);
  const RateStar = React.useCallback(({ rate }: { rate: number }) => {
    return (
      <HStack>
        {RATES.map((item, i) => {
          return (
            <Icon
              pack="assets"
              name="star"
              key={i}
              style={{
                ...globalStyle.icon16,
                tintColor:
                  i <= rate
                    ? theme["text-info-color"]
                    : theme["text-platinum-color"],
              }}
            />
          );
        })}
      </HStack>
    );
  }, []);
  const renderItem = React.useCallback(({ item }: { item: IReviewProps }) => {
    const { comment, createdAt, user, id, rate } = item;
    return (
      <VStack style={styles.item} level="1">
        <HStack>
          <HStack justify="flex-start">
            <Avatar source={{ uri: user.avatar.path }} size="small" />
            <VStack ml={12}>
              <Text category="t5-sb">{user.name}</Text>
              <Text category="s2">{dayjs(createdAt).format("DD-MM-YYYY")}</Text>
            </VStack>
          </HStack>
          <RateStar rate={rate} />
        </HStack>
        <Text category="s1" marginTop={8}>
          {item.comment}
        </Text>
      </VStack>
    );
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Review"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default DoctorReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  item: {
    marginBottom: 24,
    ...shadowStyle.shadowBtn,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
  },
});
const DATA: IReviewProps[] = [
  {
    id: "1",
    user: DATA_USER[0],
    createdAt: new Date(),
    rate: 5,
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    id: "2",
    user: DATA_USER[1],
    createdAt: new Date(),
    rate: 5,
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    id: "1a",
    user: DATA_USER[2],
    createdAt: new Date(),
    rate: 5,
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
  {
    id: "1c",
    user: DATA_USER[3],
    createdAt: new Date(),
    rate: 5,
    comment:
      "I know how terrible it can be for you at nights and even when you wake up.",
  },
];
const RATES = [0, 1, 2, 3, 4];
