import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LineChartComp from "./LineChart";
import PieChartComp from "./PieChart";
import Dropdown from "components/Dropdown";
import { useBill } from "hooks/useBill";

export default function ChartScreen() {
  const [timeRange, setTimeRange] = useState("12 m.");
  const { billList, billListByCategory, amountInfo } = useBill();
  const chartData = {
    labels: billList
      .map((item) => new Date(item.date).getMonth() + 1)
      .sort((a, b) => a - b)
      .map(String),
    data: billList.map((item) => item.amount),
  };

  const pieData = billListByCategory.map((item) => ({
    name: item.name,
    value: item.value / amountInfo.expense * 100,
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.title}>Portfolio statistics</Text>
      </View>

      <View style={styles.portfolioCard}>
        <View style={styles.headerRow}>
          <Text style={styles.label}>The size of my portfolio</Text>
          <Dropdown
            title="Time range"
            value="1 month"
            header={<Text>{timeRange}</Text>}
            onSelect={setTimeRange}
            options={[{ label: "1 month" }, { label: "3 months" }]}
          />
        </View>

        <View style={styles.amountRow}>
          <Text style={styles.amount}>¥ 514800</Text>
          <Text style={styles.changeRate}>↓ 8% / month</Text>
        </View>
        <LineChartComp data={chartData} width={300} height={200} year="2023" />
        <PieChartComp data={pieData} width={300} height={200} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  portfolioCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  changeRate: {
    marginLeft: 8,
    color: "red",
  },
});
