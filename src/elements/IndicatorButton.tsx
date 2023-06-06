import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { HStack, Text } from "components";
import { CheckBox, Icon } from "@ui-kitten/components";
import { shadowStyle } from "style/globalStyle";

interface IndicatorButtonProps {
  title: string;
  describer?: string;
  icon: string;
  onPress: () => void;
  size?: "small" | "medium";
}

const IndicatorButton = memo(
  ({
    onPress,
    title,
    icon,
    describer,
    size = "medium",
  }: IndicatorButtonProps) => {
    const [active, setActive] = React.useState(false);
    const handlePress = () => {
      onPress();
      setActive(!active);
    };
    return (
      <HStack
        style={styles.container}
        onPress={handlePress}
        level="1"
        itemsCenter
      >
        <HStack itemsCenter>
          <Icon
            pack="assets"
            name={icon}
            style={size === "small" ? styles.iconSmall : styles.iconMedium}
          />
          <View style={styles.divider} />
          <View>
            <Text category="t5-sb">{title}</Text>
            {describer && (
              <Text category="s1" maxWidth={204} status="platinum">
                {describer}
              </Text>
            )}
          </View>
        </HStack>
        <CheckBox checked={active} onChange={setActive} status="info" />
      </HStack>
    );
  }
);

export default IndicatorButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderRadius: 8,
    ...shadowStyle.shadowBtn,
    marginBottom: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  iconMedium: {
    width: 40,
    height: 40,
  },
  iconSmall: {
    width: 24,
    height: 24,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 12,
  },
});
