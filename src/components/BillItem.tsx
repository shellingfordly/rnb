import { BillCategoryColor } from "hooks/useBill";
import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import BillIcon from "./BillIcon";

const BillItem = memo(({ item }: { item: BillItem }) => (
  <View style={styles.billItem}>
    <View
      style={[
        styles.billIcon,
        { backgroundColor: BillCategoryColor[item.category] },
      ]}
    >
      <BillIcon type={item.category} />
    </View>
    <View style={styles.billInfo}>
      <Text style={styles.billName}>{item.name}</Text>
      <Text style={styles.billDate}>{item.date}</Text>
    </View>
    <Text
      style={[
        styles.billAmount,
        item.type === "expense" ? styles.expense : styles.income,
      ]}
    >
      {item.amount}
    </Text>
  </View>
));

const styles = StyleSheet.create({
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
  billIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
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

export default BillItem;
