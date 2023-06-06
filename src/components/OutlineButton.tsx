import { useTheme } from "@ui-kitten/components";
import React from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Text from "./Text";

interface IOutlineButtonProps extends TouchableOpacityProps {
  placeholder: string;
  children?: string;
  style?: StyleProp<ViewStyle>;
}

const OutlineButton = ({
  placeholder,
  children,
  style,
  ...rest
}: IOutlineButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      style={[
        {
          borderRadius: 99,
          borderWidth: 0.7,
          borderColor: theme["text-platinum-color"],
          height: 48,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text status={children ? "primary" : "platinum"} marginLeft={24}>
        {children ? children : placeholder}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
