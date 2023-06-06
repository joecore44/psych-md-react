import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { Icons } from "assets/icons";

interface IIndicatorProps {
  selectIndex: number;
  data: Array<any>;
}

const Indicator = React.memo(({ selectIndex, data }: IIndicatorProps) => {
  const theme = useTheme();
  const DotAnimated = React.useCallback(
    ({ isActive }: { isActive: boolean }) => {
      const progress = useDerivedValue(() => {
        if (isActive) {
          return 1;
        } else {
          return 0;
        }
      }, [isActive]);

      const styleDot = useAnimatedStyle(() => {
        const widthItem = interpolate(progress.value, [0, 1], [0, 32]);
        const heightItem = interpolate(progress.value, [0, 1], [0, 4]);
        return {
          height: heightItem,
          width: withSpring(widthItem),
          borderRadius: 8,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        };
      });
      return <Animated.Image style={styleDot} source={Icons.indicator} />;
    },
    []
  );
  return (
    <View style={styles.container}>
      {data.map((data, index) => {
        return (
          <View
            style={[
              styles.dot,
              { backgroundColor: theme["background-basic-color-4"] },
            ]}
            key={index}
          >
            <DotAnimated isActive={selectIndex >= index} />
          </View>
        );
      })}
    </View>
  );
});

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    height: 4,
    width: 32,
    borderRadius: 8,
    marginHorizontal: 6,
  },
});
