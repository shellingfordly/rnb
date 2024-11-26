import React, { memo } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BillItem from "../../components/BillItem";
import Chart from "./Chart";
import { useBill } from "hooks/useBill";

const StatsSection = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [300, 200, 400, 250, 300, 500, 350, 250],
      },
    ],
  };

  return (
    <View style={styles.statsContainer}>
      <View style={styles.periodSelector}>
        {["1W", "1M", "3M", "1Y", "ALL"].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              period === "1Y" && styles.periodButtonActive,
            ]}
          >
            <Text
              style={[
                styles.periodText,
                period === "1Y" && styles.periodTextActive,
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.totalAmount}>$1,200</Text>
      <Text style={styles.growthRate}>+2.6% from last week</Text>

      <Chart />

      <View style={styles.transactionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BillList = () => {
  const { billList } = useBill();

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<StatsSection />}
      data={billList}
      renderItem={({ item }) => <BillItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  statsContainer: {
    padding: 16,
  },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 4,
    marginBottom: 15,
  },
  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  periodButtonActive: {
    backgroundColor: "#000",
  },
  periodText: {
    color: "#666",
  },
  periodTextActive: {
    color: "#fff",
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center", // 添加这行
  },
  growthRate: {
    color: "#4CAF50",
    marginBottom: 24,
    textAlign: "center", // 添加这行
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 8,
    borderRadius: 6,
    top: 100, // 根据需要调整位置
    alignSelf: "center",
  },
  tooltipText: {
    color: "white",
    fontSize: 14,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 30,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flex: 1,
  },
  mainInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount: {
    fontSize: 16,
    fontWeight: "500",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});

export default memo(BillList);
