import React from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { useTheme, Layout } from "@ui-kitten/components";
import { Text } from "components";

interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  didDone: number;
  total: number;
  styleBar?: StyleProp<ViewStyle>;
  progressColor?: string;
  containColor?: string;
}

const ProgressBar = ({
  style,
  didDone,
  total,
  styleBar,
  progressColor,
  containColor,
}: ProgressBarProps) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState<number>(1);
  const progress = useSharedValue(didDone / total);

  const slider = useDerivedValue(() => {
    return progress.value * width;
  });

  const styleSlider = useAnimatedStyle(() => {
    return {
      width: withTiming(slider.value, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  const onLayout = React.useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    setWidth((prev) => {
      if (prev !== nativeEvent.layout.width) {
        return nativeEvent.layout.width;
      }
      return prev;
    });
  }, []);

  return (
    <View style={{ minWidth: 100 }}>
      <Text right category="s1-sb" status="info">
        {progress.value * 100}%
      </Text>
      <Layout
        level="2"
        style={[
          styles.container,

          style,
          {
            backgroundColor: containColor
              ? containColor
              : theme["background-basic-color-8"],
          },
        ]}
        onLayout={onLayout}
      >
        <Animated.View
          style={[
            {
              height: 4,
              backgroundColor: progressColor
                ? progressColor
                : theme["text-info-color"],
              borderRadius: 4,
            },
            styleBar,
            styleSlider,
          ]}
        />
      </Layout>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 4,
    borderRadius: 4,
    flexDirection: "row",
    overflow: "hidden",
  },
  progressText: {
    fontSize: 32,
    lineHeight: 40,
    color: "#F0DF67",
    alignSelf: "center",
  },
});
