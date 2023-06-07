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
      title: "Current Meds",
      icon: "drugs",
      numOfAvailable: "3",
      onPress: () => {
        navigate("DrugsList");
      },
    },
    {
      title: "Order Meds",
      icon: "shop",
      numOfAvailable: "38 meds",
      onPress: () => {
        navigate("DrugsShop");
      },
    },
    {
      title: "Medication Info",
      icon: "news",
      numOfAvailable: "113 articles",
      onPress: () => {
        navigate("DrugsNews");
      },
    },
  ];
  const {toggleDrawer}=useDrawer()
  return (
    <Container useSafeArea={false}>
      <Header
        title="Medication"
        accessoryLeft={<NavigationAction status="white" icon="menu" onPress={toggleDrawer} />}
      />
      <Content contentContainerStyle={styles.content}>
        

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
