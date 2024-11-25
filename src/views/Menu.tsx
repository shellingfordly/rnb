import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
import useVoice from "hooks/useVoice";

export default function MenuScreen() {
  const { text, error, isListening, startListening, stopListening } = useVoice();

  return (
    <View style={styles.container}>
      <Text>状态: {isListening ? '正在录音...' : '未录音'}</Text>
      <Text>识别内容: {text}</Text>
      {error ? <Text style={styles.error}>错误: {error}</Text> : null}
      {isListening && <ActivityIndicator size="large" />}
      <View style={styles.buttonContainer}>
        <Button 
          title={isListening ? "停止" : "开始录音"} 
          onPress={isListening ? stopListening : startListening} 
        />
      </View>
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
    color: 'red',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  }
});