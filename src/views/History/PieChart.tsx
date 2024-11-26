import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

interface PieChartData {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

interface PortfolioPieChartProps {
  data: PieChartData[];
  width?: number;
  height?: number;
}

export default function PortfolioPieChart({
  data,
  width = 320,
  height = 200,
}: PortfolioPieChartProps) {
  return (
    <View style={styles.pieChartContainer}>
      <PieChart
        data={data}
        width={width}
        height={height}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="percentage"
        backgroundColor="transparent"
        paddingLeft="15"
      />
      <View style={styles.legendContainer}>
        {data.map((item) => (
          <View key={item.name} style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: item.color }]}
            />
            <View>
              <Text style={styles.legendTitle}>{item.name}</Text>
              <Text style={styles.legendAmount}>
                €{item.amount.toLocaleString()},00 ({item.percentage}%)
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pieChartContainer: {
    marginTop: 20,
  },
  legendContainer: {
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 4,
  },
  legendTitle: {
    fontSize: 14,
    color: "#666",
  },
  legendAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
