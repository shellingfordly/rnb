import React, { memo } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BillItem = memo(({ item }: { item: BillItem }) => (
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

const styles = StyleSheet.create({
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

export default memo(BillItem);
