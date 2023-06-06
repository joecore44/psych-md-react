import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  Text,
  IDivider,
  NavigationAction,
} from "components";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { LineChart } from "react-native-chart-kit";
import dayjs from "dayjs";
import { shadowStyle } from "style/globalStyle";
import { navigate } from "navigation/RootNavigation";
import { DrawerStackParamList } from "navigation/types";

const IndicatorDetails = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { height, width } = useLayout();
  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(75,102,234,2${opacity})`,
    labelColor: (opacity = 1) => `rgba(75,102,234,234)`,
    strokeWidth: 2,
    useShadowColorFromDataset: true,
    fillShadowGradientToOffset: 0,
    fillShadowGradientFromOffset: 1,
    fillShadowGradientFrom: "#82A0F6",
    fillShadowGradientTo: "rgba(130,160,246,0.01)",
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0.4,
  };
  const Field = ({
    title,
    bmp,
    date,
  }: {
    title: string;
    bmp: number;
    date: Date;
  }) => {
    return (
      <View
        style={{ width: (width - 48) / 2, paddingLeft: 12, paddingBottom: 12 }}
      >
        <Text category="t4-b" status="platinum">
          {title}
        </Text>
        <Text category="s2" status="placeholder">
          {dayjs(new Date()).format("MMM DD,YYYY")}
        </Text>
        <Text category="t3-b">
          {bmp}{" "}
          <Text category="s2" status="platinum">
            bmp
          </Text>
        </Text>
      </View>
    );
  };
  const handleTestInput = () => {
    navigate("IndicatorTestInput");
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Desinfectant"
        accessoryLeft={<NavigationAction status="white" />}
        accessoryRight={
          <NavigationAction
            status="white"
            icon="edit"
            onPress={handleTestInput}
          />
        }
      />
      <Content>
        <View style={styles.top}>
          <HStack justify="flex-start" itemsCenter>
            <Text status="info" marginRight={4} style={styles.text}>
              98
            </Text>
            <Text category="t2" status="platinum" marginTop={16}>
              bpm
            </Text>
          </HStack>
        </View>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            legend: [`${dayjs(new Date()).format("MMMM DD, YYYY")}`],
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
          style={styles.chart}
          formatXLabel={(x) => `${x}`}
          xLabelsOffset={-4}
          width={width + 80}
          verticalLabelRotation={0}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={true}
          height={160}
          chartConfig={chartConfig}
          bezier
        />
        <Layout style={styles.goalField}>
          <Field title="GOAL" bmp={108} date={new Date()} />
          <IDivider appearance="primary" style={{ position: "absolute" }} />
          <IDivider style={{ position: "absolute" }} appearance="default" />
          <Field title="GOAL" bmp={108} date={new Date()} />
          <Field title="GOAL" bmp={108} date={new Date()} />
          <Field title="GOAL" bmp={108} date={new Date()} />
        </Layout>
      </Content>
    </Container>
  );
});

export default IndicatorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    alignItems: "center",
    marginTop: 32,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: -40,
  },
  text: {
    fontSize: 48,
    lineHeight: 72,
  },
  goalField: {
    ...shadowStyle.shadow,
    marginHorizontal: 24,
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 32,
  },
});
