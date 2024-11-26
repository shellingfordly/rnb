import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navigation = ({
  activeTab,
  onTabPress,
}: {
  activeTab: string;
  onTabPress: (tab: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("Home")}
      >
        <Ionicons
          name={activeTab === "Home" ? "home" : "home-outline"}
          size={24}
          color={activeTab === "Home" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "Home" && styles.activeText]}
        >
          首页
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("History")}
      >
        <Ionicons
          name={activeTab === "History" ? "time" : "time-outline"}
          size={24}
          color={activeTab === "History" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "History" && styles.activeText]}
        >
          图表
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cashButton}
        onPress={() => onTabPress("Cash")}
      >
        <View style={styles.cashCircle}>
          <Ionicons name="wallet-outline" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("Cards")}
      >
        <Ionicons
          name={activeTab === "Cards" ? "card" : "card-outline"}
          size={24}
          color={activeTab === "Cards" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "Cards" && styles.activeText]}
        >
          卡片
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("Person")}
      >
        <Ionicons
          name={activeTab === "Person" ? "person" : "person-outline"}
          size={24}
          color={activeTab === "Person" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "Person" && styles.activeText]}
        >
          我的
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingBottom: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabText: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 4,
  },
  activeText: {
    color: "#E94E4E",
  },
  cashButton: {
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
  },
  cashCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#E94E4E",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#E94E4E",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Navigation;
