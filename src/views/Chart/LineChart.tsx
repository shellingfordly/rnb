import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";

interface LineChartProps {
  data: {
    labels: number[];
    data: number[];
  };
  width: number;
  height: number;
  year?: string;
}

const MonthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function LineChartComp({
  data,
  width = 320,
  height = 200,
}: LineChartProps) {
  const chartData = data.data.map((value, index) => ({
    value,
    label: index % 2 === 0 ? MonthList[data.labels[index]] : "",
    dataPointText: "",
  }));

  return (
    <LineChart
      data={chartData}
      width={width}
      height={height}
      spacing={width / data.labels.length}
      color="#5C8374"
      thickness={2}
      startFillColor="rgba(92, 131, 116, 0.3)"
      endFillColor="rgba(92, 131, 116, 0.05)"
      initialSpacing={20}
      curved={true}
      isAnimated={true}
      animationDuration={500}
      hideDataPoints={true}
      noOfSections={2}
      maxValue={Math.max(...data.data) * 1.2}
      yAxisColor="transparent"
      xAxisColor="transparent"
      hideYAxisText={true}
      hideRules={true}
      pointerConfig={{
        pointerStripHeight: height,
        pointerStripColor: "#5C8374",
        pointerStripWidth: 2,
        pointerColor: "#5C8374",
        radius: 6,
        pointerLabelWidth: 100,
        pointerLabelHeight: 90,
        activatePointersOnLongPress: false,
        autoAdjustPointerLabelPosition: true,
        pointerLabelComponent: (items: any) => {
          const item = items[0];
          return (
            <View style={styles.tooltipContainer}>
              <Text style={styles.tooltipAmount}>¥ {item.value}</Text>
              <Text style={styles.tooltipDate}>{item.label}月</Text>
            </View>
          );
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  tooltipContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "auto",
    padding: 8,
    borderRadius: 8,
  },
  tooltipAmount: {
    color: "#fff",
    fontWeight: "bold",
  },
  tooltipDate: {
    color: "#fff",
    fontSize: 12,
  },
});
