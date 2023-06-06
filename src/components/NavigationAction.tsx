import React, { memo } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useTheme, Icon, TopNavigationAction } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import Text from "./Text";

import { EvaStatus } from "@ui-kitten/components/devsupport";

interface NavigationActionProps {
  icon?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
  title?: string;
  titleStatus?: EvaStatus | "body" | "white";
  size?: "giant" | "large" | "medium" | "small"; // giant-58-icon-24 large-48-icon-24  medium-40-icon-24  small-32-icon-16
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  status?: "basic" | "white" | "primary";
}

const NavigationAction = memo(
  ({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    onPress,
    icon,
    title,
    size = "large",
    titleStatus,
    disabled,
    center,
    style,
    status = "basic",
  }: NavigationActionProps) => {
    const themes = useTheme();

    const { goBack } = useNavigation();
    const _onPress = React.useCallback(() => {
      if (onPress) {
        onPress && onPress();
      } else {
        goBack();
      }
    }, [onPress, goBack]);

    const getStatus = React.useCallback(() => {
      switch (status) {
        case "basic":
          return themes["text-platinum-color"];
        case "primary":
          return themes["text-info-color"];
        case "white":
          return themes["text-white-color"];
        default:
          return themes["text-basic-color"];
      }
    }, [status]);
    const getSizeIcon = (
      size: "giant" | "large" | "medium" | "small"
    ): number => {
      switch (size) {
        case "giant":
          return 48;
        case "large":
          return 24;
        case "medium":
          return 16;
        case "small":
          return 12;
        default:
          return 24;
      }
    };
    return title ? (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={_onPress}
      >
        <Text category="t4-sb" status={titleStatus}>
          {title}
        </Text>
      </TouchableOpacity>
    ) : (
      <TopNavigationAction
        onPress={_onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.container,
          style,
          {
            marginBottom: marginBottom,
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginHorizontal: marginHorizontal,
            marginVertical: marginVertical,
            height: getSizeIcon(size),
            width: getSizeIcon(size),
          },
        ]}
        icon={(props) => (
          <Icon
            {...props}
            pack="assets"
            name={icon || "back"}
            style={[
              {
                height: getSizeIcon(size),
                width: getSizeIcon(size),
                tintColor: getStatus(),
              },
            ]}
          />
        )}
      />
    );
  }
);

export default NavigationAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
  },
});
