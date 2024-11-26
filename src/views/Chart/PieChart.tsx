import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { BillCategoryColor } from "hooks/useBill";

interface PieChartProps {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
}

export default function PieChartComp({ data, width = 320 }: PieChartProps) {
  const pieData = data.map((item) => ({
    ...item,
    color: BillCategoryColor[item.name],
  }));
  const maxValueItem = pieData.find(
    (item) => item.value === Math.max(...pieData.map((item) => item.value))
  );

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        donut
        radius={width * 0.35}
        innerRadius={width * 0.25}
        showValuesAsLabels={true}
        textSize={14}
        textBackgroundRadius={0}
        focusOnPress={false}
        labelsPosition="onBorder"
        centerLabelComponent={() => (
          <View style={styles.centerLabel}>
            <Text style={styles.centerValue}>
              {maxValueItem?.value.toFixed(2)}%
            </Text>
            <Text style={styles.centerText}>{maxValueItem?.name}</Text>
          </View>
        )}
      />
      <View style={styles.legendGrid}>
        {pieData.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>
              {item.name}: {item.value.toFixed(2)}%
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  centerLabel: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  centerText: {
    fontSize: 16,
  },
  legendGrid: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: "45%",
    maxWidth: "45%",
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
});
