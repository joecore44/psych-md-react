import React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@ui-kitten/components";
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
import { DATA_NEWS } from "constants/data";
import keyExtractor from "utils/keyExtractor";
import { shadowStyle } from "style/globalStyle";
import { navigate } from "navigation/RootNavigation";

const BookmarkNews = React.memo(() => {
  const { width } = useLayout();

  const handlePressItem = () => {
    navigate("NewsDetailsScreen");
  };
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Header
        title="Bookmark"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={DATA_NEWS}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          return (
            <HStack style={styles.item} level="1" onPress={handlePressItem}>
              <Image
                source={{ uri: item.image.path }}
                style={{ width: 80, height: 80, borderRadius: 12 }}
              />
              <VStack>
                <Text
                  category="t5-sb"
                  maxWidth={208 * (width / 375)}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  numberOfLines={2}
                  maxWidth={208 * (width / 375)}
                  category="s1"
                >
                  {item.describe}
                </Text>
              </VStack>
            </HStack>
          );
        }}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
});

export default BookmarkNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginBottom: 24,
    padding: 16,
    ...shadowStyle.shadowFade,
    borderRadius: 8,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
});
