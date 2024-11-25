import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const Chart = () => {
  const [selectedData, setSelectedData] = useState<{
    month: string;
    value: number;
  } | null>(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [65, 40, 75, 45, 50, 100, 55, 45],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 32}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.7,
        }}
        style={{
          borderRadius: 12,
        }}
        onPress={({
          value,
          index,
        }: {
          value: number;
          index: number;
        }) => {
          setSelectedData({
            month: data.labels[index],
            value: value,
          });
        }}
      />

      {selectedData && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            {selectedData.month}: ${selectedData.value}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  tooltip: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tooltipText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Chart;
