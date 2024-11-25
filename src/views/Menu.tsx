import { View, Text, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text>状态</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
