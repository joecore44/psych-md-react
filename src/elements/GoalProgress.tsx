import React, { memo } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { HStack, Text } from "components";
import { Icon } from "@ui-kitten/components";
import ProgressBar from "components/ProgressBar";

export interface GoalProgressProps {
  title: string;
  goal: { goalDone: number; total: number };
  measure: string;
  icon: string;
}

const GoalProgress = memo(
  ({
    item,
    style,
  }: {
    item: GoalProgressProps;
    style?: StyleProp<ViewStyle>;
  }) => {
    return (
      <View style={[styles.container, style]}>
        <HStack>
          <HStack justify="flex-start" mb={12}>
            <Icon pack="assets" name={item.icon} />
            <Text marginLeft={8}>{item.title}</Text>
          </HStack>
          <TouchableOpacity>
            <Icon pack="assets" name="more" />
          </TouchableOpacity>
        </HStack>
        <HStack>
          <HStack>
            <Text category="header-sb">{item.goal.goalDone}</Text>
            <Text category="t4" marginTop={14}>
              {item.measure}
            </Text>
          </HStack>
          <ProgressBar didDone={40} total={100} />
        </HStack>
      </View>
    );
  }
);

export default GoalProgress;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    padding: 16,
  },
});
