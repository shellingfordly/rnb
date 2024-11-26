import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function PersonScreen() {
  const menuItems = [
    { icon: "👤", title: "Personal Data" },
    { icon: "⚙️", title: "Settings" },
    { icon: "📄", title: "E-Statement" },
    { icon: "💝", title: "Refferal Code" },
    { icon: "💬", title: "FAQs" },
    { icon: "📖", title: "Our Handbook" },
    { icon: "👥", title: "Community" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require("/assets/icon.png")} />
        <Text style={styles.name}>William John Malik</Text>
        <Text style={styles.title}>Aggressive Investor</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.title}</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
  },
  title: {
    fontSize: 14,
    color: "#636e72",
  },
  menuContainer: {
    backgroundColor: "white",
    padding: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f2f6",
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#2d3436",
  },
  chevron: {
    fontSize: 20,
    color: "#b2bec3",
  },
});
