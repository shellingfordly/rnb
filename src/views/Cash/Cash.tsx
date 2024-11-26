import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dropdown from "../../components/Dropdown";

export default function CashScreen() {
  const [amount, setAmount] = useState("234");
  const [selectedBank, setSelectedBank] = useState("Wells Fargo");
  const [selectedCategory, setSelectedCategory] = useState("Movie");

  const numberPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", "backspace"],
  ];

  const handleNumberPress = (num: string) => {
    if (num === "backspace") {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount((prev) => prev + num);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Request</Text>
      </View>

      <Text style={styles.amount}>${amount}</Text>

      <View style={styles.selectBox}>
        <Dropdown
          title="Wells Fargo"
          onSelect={setSelectedBank}
          header={<Text>Wells Fargo</Text>}
          options={[{ label: "Wells Fargo" }, { label: "Bank of America" }]}
        />
        <Dropdown
          title="Category"
          onSelect={setSelectedCategory}
          header={<Text>Category</Text>}
          options={[
            { label: "Food", icon: "🍔", color: "#E8F5E9" },
            { label: "Travel", icon: "✈️", color: "#FFF3E0" },
            { label: "House", icon: "🏠", color: "#F3E5F5" },
            { label: "Movie", icon: "🎬", color: "#E3F2FD" },
          ]}
        />
      </View>

      <View style={styles.numPad}>
        {numberPad.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((num, j) => (
              <TouchableOpacity
                key={j}
                style={styles.numKey}
                onPress={() => handleNumberPress(num)}
              >
                {num === "backspace" ? (
                  <Ionicons name="backspace" size={24} color="black" />
                ) : (
                  <Text style={styles.numText}>{num}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.requestButtonText}>Request Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
  },
  amount: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  selectBox: {
    gap: 15,
    marginBottom: 30,
  },
  userSelect: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  categorySelect: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "space-between",
  },
  categoryIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#FFE5B4",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numPad: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  numKey: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    fontSize: 24,
    fontWeight: "500",
  },
  requestButton: {
    backgroundColor: "#000",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
