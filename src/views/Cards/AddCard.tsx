import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useCard } from "hooks/useCard";
import Toast from "react-native-toast-message";

export default function AddCard() {
  const navigation = useNavigation();
  const { addCard } = useCard();
  const [cardData, setCardData] = useState<CardType>({
    name: "",
    amount: 0,
    income: 0,
    expense: 0,
    cardNumber: "",
    password: "",
    type: "debit", // 默认值
  });

  const handleSubmit = () => {
    // 验证必填字段
    if (!cardData.name.trim()) {
      Toast.show({
        type: "error",
        text1: "请输入卡片名称",
        position: "top",
        visibilityTime: 2000,
      });
      return;
    }

    if (!cardData.amount) {
      Toast.show({
        type: "error",
        text1: "请输入初始金额",
        position: "top",
        visibilityTime: 2000,
      });
      return;
    }

    if (!cardData.cardNumber.trim()) {
      Toast.show({
        type: "error",
        text1: "请输入卡号",
        position: "top",
        visibilityTime: 2000,
      });
      return;
    }

    if (!cardData.password.trim()) {
      Toast.show({
        type: "error",
        text1: "请输入密码",
        position: "top",
        visibilityTime: 2000,
      });
      return;
    }

    console.log(cardData);
    addCard(cardData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>添加新卡片</Text>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>卡片名称</Text>
          <TextInput
            style={styles.input}
            value={cardData.name}
            onChangeText={(text) => setCardData({ ...cardData, name: text })}
            placeholder="输入卡片名称"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>初始金额</Text>
          <TextInput
            style={styles.input}
            value={cardData.amount as any}
            onChangeText={(text) =>
              setCardData({ ...cardData, amount: parseFloat(text) })
            }
            placeholder="输入初始金额"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>卡号</Text>
          <TextInput
            style={styles.input}
            value={cardData.cardNumber}
            onChangeText={(text) =>
              setCardData({ ...cardData, cardNumber: text })
            }
            placeholder="输入卡号"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            style={styles.input}
            value={cardData.password}
            onChangeText={(text) =>
              setCardData({ ...cardData, password: text })
            }
            placeholder="输入密码"
            secureTextEntry
          />
        </View>

        <View style={styles.typeSelector}>
          <Text style={styles.label}>卡片类型</Text>
          <View style={styles.typeButtons}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                cardData.type === "debit" && styles.selectedType,
              ]}
              onPress={() => setCardData({ ...cardData, type: "debit" })}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  cardData.type === "debit" && styles.selectedTypeText,
                ]}
              >
                借记卡
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.typeButton,
                cardData.type === "credit" && styles.selectedType,
              ]}
              onPress={() => setCardData({ ...cardData, type: "credit" })}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  cardData.type === "credit" && styles.selectedTypeText,
                ]}
              >
                信用卡
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>添加卡片</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
  },
  form: {
    flex: 1,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  typeSelector: {
    marginBottom: 20,
  },
  typeButtons: {
    flexDirection: "row",
    gap: 12,
  },
  typeButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedType: {
    backgroundColor: "#FF6B6B",
    borderColor: "#FF6B6B",
  },
  typeButtonText: {
    fontSize: 16,
    color: "#333",
  },
  selectedTypeText: {
    color: "#FFF",
  },
  submitButton: {
    margin: 16,
    backgroundColor: "#FF6B6B",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
