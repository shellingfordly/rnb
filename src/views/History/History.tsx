import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function HistoryScreen() {
  const [timeRange, setTimeRange] = useState("12 m.");

  const chartData = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        data: [0, 0, 0, 2000, 2000, 2000, 4000, 4000, 4000, 3000, 4000, 3500],
      },
    ],
  };

  const pieData = [
    {
      name: "Consumer loans",
      amount: 3861,
      percentage: 75,
      color: "#5C8374",
    },
    {
      name: "Business loans",
      amount: 1287,
      percentage: 25,
      color: "#E3A853",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.title}>Portfolio statistics</Text>
      </View>

      <View style={styles.portfolioCard}>
        <View style={styles.headerRow}>
          <Text style={styles.label}>The size of my portfolio</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text>{timeRange}</Text>
            <Ionicons name="chevron-down" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.amountRow}>
          <Text style={styles.amount}>¥ 514800</Text>
          <Text style={styles.changeRate}>↓ 8% / month</Text>
        </View>
        <LineChart data={chartData} width={320} height={200} year="2023" />
        <PieChart data={pieData} width={320} height={200} />
      </View>
    </View>
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
