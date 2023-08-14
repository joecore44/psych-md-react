import React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Header, NavigationAction, Text, VStack } from "components";
import keyExtractor from "utils/keyExtractor";
import { shadowStyle } from "style/globalStyle";
import TabBarShop from "elements/TabBarShop";
import { navigate } from "navigation/RootNavigation";

const DrugsShop = React.memo(() => {
  const theme = useTheme();
  const { height, width, top, bottom } = useLayout();
  const [selectedTab, setSelectedTab] = React.useState("a");

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Order Medication"
        accessoryLeft={<NavigationAction status="white" />}
        accessoryRight={<NavigationAction status="white" icon="shopBag" />}
      />
      <TabBarShop activeTab={selectedTab} setActiveTab={setSelectedTab} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <VStack
              onPress={() => navigate("DrugsShopDetails")}
              style={{ ...shadowStyle.shadowFade, borderRadius: 8 }}
              mh={8}
              mb={16}
              level="1"
            >
              <Image
                source={{ uri: item.image.path }}
                style={{
                  width: 165 * (width / 375),
                  height: 114 * (height / 812),
                  marginTop: 16,
                }}
              />
              <Text category="t4-sb" center>
                {item.name}
              </Text>
              <Text category="t4" status="info" center marginBottom={12}>
                ${item.price.toFixed(2)}
              </Text>
            </VStack>
          );
        }}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default DrugsShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: 24,
  },
});
const DATA = [
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Testosterone",
    price: 119,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Nandrolone",
    price: 108,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Testosterone",
    price: 119,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Nandrolone",
    price: 108,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Testosterone",
    price: 119,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Nandrolone",
    price: 108,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Testosterone",
    price: 119,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Nandrolone",
    price: 108,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Testosterone",
    price: 119,
  },
  {
    image: {
      path: "https://getpetermd.com/wp-content/uploads/Box_Minoxdil-1024x768-1.jpg",
    },
    name: "Nandrolone",
    price: 108,
  },
];
