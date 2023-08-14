import React from "react";
import { StyleSheet, ViewStyle, StyleProp, View, Image } from "react-native";
import { TopNavigation, TopNavigationProps } from "@ui-kitten/components";
import { useLayout } from "hooks";
import HStack from "./HStack";
import Text from "./Text";
import { Images } from "assets/images";
console.log(Images.logo);

interface IHeaderProps {
  style?: StyleProp<ViewStyle>;
  accessoryLeft?: JSX.Element;
  accessoryRight?: JSX.Element;
  accessoryCenter?: JSX.Element;
  title?: string;
  logo?: boolean;
}

const Header = React.memo(
  ({
    accessoryCenter,
    accessoryLeft,
    accessoryRight,
    title,
    logo, // Add logo prop
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
        <View style={styles.logo}>
          {logo ? (
            <Image source={Images.logo} />
          ) : (
            
            <Text status="white" category="t5-sb" center>
              <Image source={Images.logo} />
              {title}
            </Text>
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
  logo: {
    alignSelf: "center",
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