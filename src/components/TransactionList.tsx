import React, { memo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";

const TransactionItem = memo(({ item }: { item: Transaction }) => (
  <TouchableOpacity style={styles.transactionItem}>
    <View style={[styles.avatar, { backgroundColor: item.iconBgColor }]}>
      <Image source={item.icon} style={styles.icon} />
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.mainInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text
          style={[
            styles.amount,
            { color: item.amount.startsWith("+") ? "#4CAF50" : "#E94E4E" },
          ]}
        >
          {item.amount}
        </Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </TouchableOpacity>
));

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: string;
  icon: any;
  iconBgColor: string;
}

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

      <BarChart
        data={chartData}
        width={Dimensions.get("window").width - 32}
        height={200}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.5,
          propsForBackgroundLines: {
            strokeWidth: 0,
          },
        }}
        style={styles.chart}
      />

      <View style={styles.transactionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 示例数据生成函数
const generateItems = (): Transaction[] => {
  return [
    {
      id: "1",
      name: "Dribbble Premium",
      date: "3 Des 2021",
      amount: "-$180",
      icon: require("../../assets/icon.png"),
      iconBgColor: "#EA4C89",
    },
    {
      id: "2",
      name: "Snapchat Ads",
      date: "3 Des 2021",
      amount: "+$24",
      icon: require("../../assets/icon.png"),
      iconBgColor: "#FFFC00",
    },
    // ... 添加更多交易记录
  ];
};

const TransactionList = () => {
  const data = generateItems();

  return (
    <View style={styles.container}>
      <StatsSection />
      <FlatList
        data={data}
        renderItem={({ item }) => <TransactionItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 24,
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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

export default memo(TransactionList);
