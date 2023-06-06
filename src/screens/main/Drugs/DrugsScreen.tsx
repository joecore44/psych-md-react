import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, Header, NavigationAction, Text } from "components";
import { HomeButton } from "elements";
import { navigate } from "navigation/RootNavigation";
import { useDrawer } from "hooks";

const DrugsScreen = React.memo(() => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const DATA = [
    {
      title: "Drugs List",
      icon: "drugs",
      numOfAvailable: "113 list",
      onPress: () => {
        navigate("DrugsList");
      },
    },
    {
      title: "Drugs Shop",
      icon: "shop",
      numOfAvailable: "88 drugs",
      onPress: () => {
        navigate("DrugsShop");
      },
    },
    {
      title: "News Healthy",
      icon: "news",
      numOfAvailable: "113 available",
      onPress: () => {
        navigate("DrugsNews");
      },
    },
  ];
  const {toggleDrawer}=useDrawer()
  return (
    <Container useSafeArea={false}>
      <Header
        title="Drugs"
        accessoryLeft={<NavigationAction status="white" icon="menu" onPress={toggleDrawer} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="header" marginTop={40} marginBottom={12}>
          Hello Jonas,
        </Text>
        <Text category="t1" uppercase marginRight={60} status="platinum">
          Do you need medicines?
        </Text>

        <View style={styles.childrenContent}>
          {DATA.map((item, i) => {
            return (
              <HomeButton
                key={i}
                title={item.title}
                icon={item.icon}
                numOfAvailable={item.numOfAvailable}
                onPress={() => {
                  item.onPress();
                  setSelectedIndex(i);
                }}
                hightLight={i === selectedIndex}
              />
            );
          })}
        </View>
      </Content>
    </Container>
  );
});

export default DrugsScreen;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
  childrenContent: {
    marginTop: 32,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
