import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LineChartComp from "./LineChart";
import PieChartComp from "./PieChart";
import Dropdown from "components/Dropdown";
import { useBill } from "hooks/useBill";
import DateSelect from "components/DateSelect";

export default function ChartScreen() {
  const [timeRange, setTimeRange] = useState("12 m.");
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  const { billList, billListByCategory, amountInfo } = useBill();
  const chartData = {
    labels: billList
      .map((item) => new Date(item.date).getMonth())
      .sort((a, b) => a - b),
    data: billList.map((item) => item.amount),
  };

  const pieData = billListByCategory.map((item) => ({
    name: item.name,
    value: (item.value / amountInfo.expense) * 100,
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.amountContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.label}>Expense</Text>
          <Text style={styles.amount}>-¥{amountInfo.expense.toFixed(2)}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Dropdown
            title="Date Range"
            onSelect={setTimeRange}
            header={
              <View style={styles.dateSelector}>
                <Text style={styles.dateText}>Jul 2024</Text>
                <Ionicons name="chevron-down" size={20} color="#000" />
              </View>
            }
            optionNode={
              <DateSelect
                value={selectedDate}
                onChange={(year, month) => {
                  setSelectedDate({ year, month });
                }}
              />
            }
          />
        </View>
      </View>
      <LineChartComp data={chartData} width={320} height={200} />
      {/* 分割线 */}
      <View style={styles.divider} />
      {/* 遍历billListByCategory显示 */}
      <View style={styles.categoryList}>
        {billListByCategory.map((item) => (
          <View key={item.name} style={styles.categoryItem}>
            <View style={styles.categoryLeft}>
              <View style={styles.categoryDot} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
            <Text style={styles.categoryAmount}>${item.value.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <PieChartComp data={pieData} width={320} height={200} />
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dateSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 20,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
  },
  // 分割线
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  // 分类列表
  categoryList: {
    padding: 16,
    paddingTop: 0,
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  categoryLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2E7D32",
  },
  categoryName: {
    fontSize: 16,
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    height: 50,
  },
});
