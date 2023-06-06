import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Icon } from "@ui-kitten/components";

import { HStack, IDivider, Text, VStack } from "components";
import { useLayout } from "hooks";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DrawerStackParamList } from "navigation/types";

interface ChartProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const Chart = React.memo(({ containerStyle }: ChartProps) => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { width } = useLayout();
  const chartConfig: AbstractChartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(75,102,234,234)`,
    labelColor: (opacity = 1) => `rgba(75,102,234,234)`,
    strokeWidth: 2,
    useShadowColorFromDataset: true,
    fillShadowGradientToOffset: 0,
    fillShadowGradientFromOffset: 1,
    fillShadowGradientFrom: "#82A0F670",
    fillShadowGradientTo: "rgba(130,160,246,0.01)",
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0.7,
  };
  const handleGoal = () => navigate("IndicatorGoal");
  const handleDetail = () => navigate("IndicatorDetails");
  const handleEdit = () => navigate("IndicatorSetting");
  return (
    <View style={[styles.container, containerStyle]}>
      <HStack justify="flex-start" mh={16} style={styles.header}>
        <Icon pack="assets" name="disinfectant" />
        <Text category="t5-sb" marginLeft={4}>
          Desinfectant
        </Text>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={handleEdit}
          activeOpacity={0.7}
        >
          <Icon pack="assets" name="edit" style={styles.iconEdit} />
        </TouchableOpacity>
      </HStack>
      <LineChart
        data={{
          labels: ["b"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        hidePointsAtIndex={[0, 1, 2, 4, 5]}
        formatYLabel={(y) => `${y}`}
        width={width + 100}
        segments={-1}
        height={124}
        yAxisInterval={-10}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <VStack itemsCenter mh={16} level="1" pt={8} mb={24} mt={-12}>
        <IDivider marginHorizontal={16} marginBottom={8} />
        <HStack justify="space-between">
          <HStack justify="flex-start" onPress={handleDetail}>
            <Icon pack="assets" name="add" />
            <Text category="s1" status="platinum" marginLeft={4}>
              Details
            </Text>
          </HStack>
          <IDivider appearance="primary" marginHorizontal={44} />
          <HStack justify="flex-start" onPress={handleGoal}>
            <Icon pack="assets" name="goal" />
            <Text category="s1" status="platinum" marginLeft={4}>
              Goal
            </Text>
          </HStack>
        </HStack>
        <IDivider marginHorizontal={16} marginTop={8} />
      </VStack>
    </View>
  );
});

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: -48,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: "#F3F6FE",
    paddingLeft: 12,
  },
  buttonEdit: {
    width: 44,
    height: 44,
    borderRadius: 99,
    backgroundColor: "#4B66EA",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 16,
    top: 24,
  },
  iconEdit: {
    width: 20,
    height: 20,
  },
});
