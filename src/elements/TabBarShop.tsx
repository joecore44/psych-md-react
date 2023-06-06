import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";

import { Text } from "components";
import { useTheme } from "@ui-kitten/components";
import keyExtractor from "utils/keyExtractor";

interface TabBarShopProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabBarShop = ({ activeTab, setActiveTab }: TabBarShopProps) => {
  const theme = useTheme();
  const refFlatList = React.useRef<FlatList>(null);
  const viewAbilityConfig = {
    viewAreaCoveragePercentThreshold: 150,
  };
  const renderItem = ({ item }: { item: any }) => {
    const isActive = item === activeTab;
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveTab(item);
          refFlatList.current?.scrollToItem({
            item: item,
            animated: true,
            viewPosition: 0.5,
          });
        }}
        style={{
          borderColor: isActive ? theme["text-info-color"] : "transparent",
          ...styles.button,
        }}
        activeOpacity={0.7}
      >
        <Text
          status={isActive ? "info" : "platinum"}
          uppercase
          category="t5-sb"
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      ref={refFlatList}
      data={DATA}
      renderItem={renderItem}
      scrollEventThrottle={16}
      keyExtractor={keyExtractor}
      onScrollToIndexFailed={() => {}}
      viewabilityConfig={viewAbilityConfig}
      showsHorizontalScrollIndicator={false}
      style={{}}
      contentContainerStyle={styles.content}
    />
  );
};

export default TabBarShop;

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 12,
  },
  button: {
    marginHorizontal: 2,
    paddingHorizontal: 8,
    paddingTop: 8,
    borderBottomWidth: 2,
    paddingBottom: 12
  },
});
const DATA = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
