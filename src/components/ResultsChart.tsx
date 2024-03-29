import React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Text } from "components";

interface IProgressChartProps {
  titles: string[];
  results: number[];
  backgroundColor?: string;
  backgroundOpacity?: number;
}

const ResultsChart: React.FC<IProgressChartProps> = ({
  titles,
  results,
  backgroundColor = "#ff4000",
  backgroundOpacity = 0,
  borderRadius = 8,
}) => {
  const maxValue = 2000;
  const normalizedResults = results.map((value) => value / maxValue);

  return (
    <View style={[styles.container, { borderRadius }]}>
      <ProgressChart
        data={normalizedResults}
        width={200}
        height={200}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundGradientFromOpacity: backgroundOpacity,
          backgroundGradientToOpacity: backgroundOpacity,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        }}
        hideLegend={true}
      />
      <View style={[styles.labelsContainer, { backgroundColor }]}>
        {titles.map((title, index) => (
          <Text style={styles.label} key={title} >
            {title}: {results[index]}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
    overflow: "hidden",
  },
  labelsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default ResultsChart;
