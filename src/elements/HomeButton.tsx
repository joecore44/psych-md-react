import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import Text from "components/Text";
import { Icon } from "@ui-kitten/components";
import { useLayout } from "hooks";
import { shadowStyle } from "style/globalStyle";

interface HomeButtonProps {
  title: string;
  icon: string;
  numOfAvailable: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  hightLight?: boolean;
  onPress?(): void;
}

const HomeButton = memo(
  ({
    title,
    icon,
    numOfAvailable,
    style,
    hightLight,
    onPress,
    color,
  }: HomeButtonProps) => {
    const { width } = useLayout();
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          styles.button,
          {
            backgroundColor: hightLight ? "#969696" : color,
          },
          style,
          {
            minWidth: (width - 48) / 2,
          },
        ]}
      >
        <Icon pack="assets" name={icon} style={styles.icon} />
        <Text category="t4" status="white">
          {title}
        </Text>
        <Text category="s1" style={{ color: "#FFFFFF70" }}>
          {numOfAvailable}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default HomeButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#4B66EA",
    marginBottom: 32,
    ...shadowStyle.shadowBtn,
  },
  icon: {
    tintColor: "#FFF",
    marginBottom: 28,
  },
});
