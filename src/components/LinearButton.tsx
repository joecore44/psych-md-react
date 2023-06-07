import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

import Text from "./Text";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { shadowStyle } from "style/globalStyle";
import { useLayout } from "hooks";

interface ILinearGradient {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?(): void;
  width?: number;
  height?: number;
  shadow?: boolean;
  disabled?: boolean;
}

const LinearButton = ({
  style,
  width = 303,
  height = 48,
  title,
  onPress,
  shadow = true,
  disabled,
}: ILinearGradient) => {
  function SvgComponent() {
    const { width: widthDevice } = useLayout();
    const widthItem = width * (widthDevice / 375);
    return (
      <Svg
        width={widthItem}
        height={height}
        viewBox={`0 0 ${widthItem} ${height}`}
        fill="none"
      >
        <Rect
          x={26}
          y={24}
          width={251}
          height={24}
          rx={12}
          fill={disabled ? "#969696" : "#a000ff"}
        />
        <Rect
          width={widthItem}
          height={height}
          rx={24}
          fill="url(#paint0_linear_0_78)"
        />
        <Defs>
          {/* @ts-ignore */}
          <LinearGradient
            id="paint0_linear_0_78"
            x1={75.75}
            y1={72}
            x2={110.301}
            y2={-37.053}
          >
            <Stop stopColor={disabled ? "#969696" : "#a000ff"} />
            <Stop
              offset={0.105208}
              stopColor={disabled ? "#969696" : "#a000ff"}
            />
            <Stop offset={1} stopColor={disabled ? "#969696" : "#a000ff"} />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.contentButton, style, shadow && shadowStyle.shadowBtn]}
    >
      <SvgComponent />
      <Text style={styles.text} category="t5-sb" status={"white"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  contentButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    position: "absolute",
    textAlign: "center",
  },
});
