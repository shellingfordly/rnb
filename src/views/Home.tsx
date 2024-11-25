import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Home() {
  const transactions = [
    {
      id: "1",
      name: "Dribbble Premium",
      date: "3 Des 2021",
      amount: "-$180",
      icon: require("../../assets/icon.png"),
      bgColor: "#FFE4F3",
      type: "expense",
    },
    {
      id: "2",
      name: "Snapchat Ads",
      date: "3 Des 2021",
      amount: "+$24",
      icon: require("../../assets/icon.png"),
      bgColor: "#FFE4BA",
      type: "income",
    },
    {
      id: "3",
      name: "Skype Premium",
      date: "3 Des 2021",
      amount: "-$60",
      icon: require("../../assets/icon.png"),
      bgColor: "#E4EEFF",
      type: "expense",
    },
    // ... 更多交易数据
  ];

  return (
    <View style={styles.container}>
      {/* 固定部分 */}
      <View style={styles.fixedContent}>
        {/* 头部 */}
        <View style={styles.header}>
          <Text style={styles.title}>Banksad</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 银行卡 */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.balance}>$1,200</Text>
              <Image
                source={require("../../assets/icon.png")}
                style={styles.visaLogo}
              />
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardType}>Debit Card</Text>
              <Text style={styles.cardDate}>09/24</Text>
            </View>
          </View>
          <View style={styles.addCardButton}>
            <Ionicons name="add" size={24} color="#ddd" />
          </View>
        </View>

        {/* 操作按钮 */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.transferButton]}
          >
            <Ionicons name="paper-plane-outline" size={20} color="#000" />
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.requestButton]}>
            <Ionicons name="download-outline" size={20} color="#000" />
            <Text style={styles.actionText}>Request</Text>
          </TouchableOpacity>
        </View>

        {/* 交易标题 */}
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 可滚动的交易列表 */}
      <ScrollView
        style={styles.transactionList}
        showsVerticalScrollIndicator={false}
      >
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View
              style={[
                styles.transactionIcon,
                { backgroundColor: transaction.bgColor },
              ]}
            >
              <Image source={transaction.icon} style={styles.appIcon} />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                transaction.type === "expense" ? styles.expense : styles.income,
              ]}
            >
              {transaction.amount}
            </Text>
          </View>
        ))}
        {/* 底部留白 */}
        <View style={styles.listFooter} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fixedContent: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 20,
    height: 100,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  visaLogo: {
    width: 50,
    height: 16,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardType: {
    color: "#fff",
    fontSize: 14,
  },
  cardDate: {
    color: "#fff",
    fontSize: 14,
  },
  addCardButton: {
    width: 60,
    height: 100,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  transferButton: {
    backgroundColor: "#FFE4BA",
  },
  requestButton: {
    backgroundColor: "#E4FFE4",
  },
  actionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactions: {
    flex: 1,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  transactionList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  listFooter: {
    height: 20, // 底部留白
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width: 24,
    height: 24,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: "#666",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  expense: {
    color: "#FF4B55",
  },
  income: {
    color: "#4CAF50",
  },
});

export default Home;
