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
import { useCard } from "hooks/useCard";
import { useNavigation } from "@react-navigation/native";
import { useBill } from "hooks/useBill";
import BillItem from "components/BillItem";

export default function Home() {
  const navigation = useNavigation<any>();
  const { cardList } = useCard();
  const { billList } = useBill();

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}
          contentContainerStyle={styles.cardContentContainer}
        >
          {cardList.map((card, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.balance}>{card.name}</Text>
                <Image
                  source={require("/assets/icon.png")}
                  style={styles.visaLogo}
                />
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.cardType}>{card.type}</Text>
                <Text style={styles.cardDate}>{card.cardNumber}</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity
            style={styles.addCardButton}
            onPress={() => navigation.navigate("Cards", { screen: "AddCard" })}
          >
            <Ionicons name="add" size={24} color="#ddd" />
          </TouchableOpacity>
        </ScrollView>

        {/* 操作按钮 */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.transferButton]}
          >
            <Ionicons name="wallet-outline" size={20} color="#000" />
            <Text style={styles.actionText}>收入</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.requestButton]}>
            <Ionicons name="trending-up-outline" size={20} color="#000" />
            <Text style={styles.actionText}>支出</Text>
          </TouchableOpacity>
        </View>

        {/* 账单标题 */}
        <View style={styles.billHeader}>
          <Text style={styles.billTitle}>全部账单</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 账单列表 */}
      <ScrollView style={styles.billList} showsVerticalScrollIndicator={false}>
        {billList.map((item) => (
          <BillItem key={item.id} item={item} />
        ))}
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
    marginBottom: 24,
  },
  cardContentContainer: {
    gap: 16,
    paddingRight: 16,
  },
  card: {
    width: 280,
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
  billHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  billTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  billList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  billItem: {
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
  billIcon: {
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
  billInfo: {
    flex: 1,
    marginLeft: 12,
  },
  billName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  billDate: {
    fontSize: 14,
    color: "#666",
  },
  billAmount: {
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
