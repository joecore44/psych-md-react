import React from "react";
import { View, StyleSheet } from "react-native";
import { ViewPager } from "@ui-kitten/components";

import {
  Container,
  Content,
  Header,
  NavigationAction,
  TabBar,
} from "components";
import IndicatorButton from "elements/IndicatorButton";

const IndicatorSetting = React.memo(() => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title="Test Indicators"
      />
      <TabBar
        tabActive={activeTab}
        onChangeTab={setActiveTab}
        tabs={["Basic", "Premium"]}
      />
      <Content contentContainerStyle={styles.content}>
        <ViewPager selectedIndex={activeTab} onSelect={setActiveTab}>
          <View style={styles.children}>
            {DATA_BASIC.map((item, i) => {
              return (
                <IndicatorButton
                  title={item.title}
                  key={i}
                  icon={item.icon}
                  onPress={() => {}}
                />
              );
            })}
          </View>
          <View style={styles.children}>
            {DATA_PREMIUM.map((item, i) => {
              return (
                <IndicatorButton
                  size="small"
                  title={item.title}
                  key={i}
                  icon={item.icon}
                  describer={item.describer}
                  onPress={() => {}}
                />
              );
            })}
          </View>
        </ViewPager>
      </Content>
    </Container>
  );
});

export default IndicatorSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
  },
  children: {
    marginHorizontal: 24,
    paddingBottom: 40,
  },
});
const DATA_BASIC = [
  {
    title: "Apple Health",
    icon: "appleHealth",
  },
  {
    title: "Fibit",
    icon: "appleHealth",
  },
  {
    title: "Withings",
    icon: "withings",
  },
  {
    title: "iHealth",
    icon: "ihealth",
  },
  {
    title: "MiBand",
    icon: "miband",
  },
  {
    title: "Cerner",
    icon: "cerner",
  },
  {
    title: "Cerner",
    icon: "cerner",
  },
  {
    title: "Apple Health",
    icon: "appleHealth",
  },
];
const DATA_PREMIUM = [
  {
    title: "Desinfectant",
    icon: "disinfectant",
    describer: "Many people experience neck and back injuries",
  },
  {
    title: "Transfusion",
    icon: "transfusion",
    describer: "Many people experience neck and back injuries",
  },
  {
    title: "Weight",
    icon: "weight",
    describer: "Many people experience neck and back injuries",
  },
];
