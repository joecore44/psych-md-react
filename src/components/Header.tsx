import React from "react";
import { StyleSheet, ViewStyle, StyleProp, View } from "react-native";
import { TopNavigation, TopNavigationProps } from "@ui-kitten/components";
import { useLayout } from "hooks";
import HStack from "./HStack";
import Text from "./Text";

interface IHeaderProps {
  style?: StyleProp<ViewStyle>;
  accessoryLeft?: JSX.Element;
  accessoryRight?: JSX.Element;
  accessoryCenter?: JSX.Element;
  title?: string;
}

const Header = React.memo(
  ({
    accessoryCenter,
    accessoryLeft,
    accessoryRight,
    title,
    style,
  }: IHeaderProps) => {
    const { top } = useLayout();
    return (
      <HStack
        style={[
          styles.headerContainer,
          {
            paddingTop: top + 8,
          },
          style,
        ]}
      >
        {accessoryLeft}
        <View style={styles.center}>
          {title ? (
            <Text status="white" category="t5-sb" center>
              {title}
            </Text>
          ) : (
            accessoryCenter
          )}
        </View>
        {accessoryRight}
      </HStack>
    );
  }
);
export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#404040",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  center: {
    alignSelf: "center",
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    zIndex: -10,
  },
});
