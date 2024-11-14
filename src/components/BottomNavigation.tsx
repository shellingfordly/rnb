import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 需要安装 @expo/vector-icons

const BottomNavigation = ({
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
          Home
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
          History
        </Text>
      </TouchableOpacity>

     <TouchableOpacity 
        style={styles.cashButton}
        onPress={() => onTabPress('Cash')}
      >
        <View style={styles.cashCircle}>
          <Ionicons name="wallet-outline" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("Profile")}
      >
        <Ionicons
          name={activeTab === "Profile" ? "person" : "person-outline"}
          size={24}
          color={activeTab === "Profile" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "Profile" && styles.activeText]}
        >
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress("Menu")}
      >
        <Ionicons
          name={activeTab === "Menu" ? "menu" : "menu-outline"}
          size={24}
          color={activeTab === "Menu" ? "#FF6B6B" : "#666"}
        />
        <Text
          style={[styles.tabText, activeTab === "Menu" && styles.activeText]}
        >
          Menu
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
    marginBottom: 30,
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

export default BottomNavigation;
