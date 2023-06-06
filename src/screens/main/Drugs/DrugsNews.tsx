import React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useDrawer, useLayout } from "hooks";

import { Container, Header, NavigationAction, Text, VStack } from "components";
import keyExtractor from "utils/keyExtractor";
import { shadowStyle } from "style/globalStyle";
import { navigate } from "navigation/RootNavigation";
import { DrugsNewsProps } from "constants/types";
import { DATA_NEWS } from "constants/data";



const DrugsNews = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const { toggleDrawer } = useDrawer();

  const handlePressItem = () => {
    navigate("NewsDetailsScreen");
  };
  const handleBookmark = () => {
    navigate("BookmarkNews");
  };

  const renderItem = ({ item }: { item: DrugsNewsProps }) => {
    return (
      <VStack style={styles.item} level="1" onPress={handlePressItem}>
        <Image
          source={{ uri: item.image.path }}
          style={{
            width: 311 * (width / 375),
            height: 179 * (height / 812),
            borderRadius: 8,
          }}
        />
        <Text category="t5-sb" marginBottom={6} marginTop={12}>
          {item.title}
        </Text>
        <Text category="s1" status="platinum">
          {item.describe}
        </Text>
      </VStack>
    );
  };
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Header
        title="Drugs"
        accessoryLeft={
          <NavigationAction icon="menu" onPress={toggleDrawer} status="white" />
        }
        accessoryRight={
          <NavigationAction
            icon="bookmark"
            onPress={handleBookmark}
            status="white"
          />
        }
      />
      <FlatList
        data={DATA_NEWS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
      />
    </Container>
  );
});

export default DrugsNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    ...shadowStyle.shadowFade,
    marginBottom: 24,
    borderRadius: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 40,
  },
});

