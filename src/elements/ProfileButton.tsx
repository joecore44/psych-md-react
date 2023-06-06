import { Icon, useTheme } from "@ui-kitten/components";
import { HStack, IDivider, Text } from "components";
import React from "react";
import { StyleSheet } from "react-native";
import { globalStyle, shadowStyle } from "style/globalStyle";

const ProfileButton = ({
  icon,
  title,
  onPress,
}: {
  icon: string;
  title: string;
  onPress?(): void;
}) => {
  const theme = useTheme();
  return (
    <HStack onPress={onPress} style={styles.profileButton}>
      <HStack justify="flex-start">
        <Icon
          pack="assets"
          name={icon}
          style={{
            tintColor: theme["text-info-color"],
            ...globalStyle.icon24,
          }}
        />
        <IDivider appearance="primary" marginHorizontal={12} />
        <Text category="t4">{title}</Text>
      </HStack>
      <Icon pack="assets" name="arrowRight" />
    </HStack>
  );
};
export default ProfileButton;

const styles = StyleSheet.create({
  profileButton: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    ...shadowStyle.shadow,
    borderRadius: 8,
    padding: 12,
    marginTop: 24,
  },
});
