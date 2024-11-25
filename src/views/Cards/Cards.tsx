import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCard } from "hooks/useCard";

interface CardProps extends CardType {
  color?: string;
}

const Card = ({
  name,
  amount,
  cardNumber,
  type,
  color = "#FFFFFF",
}: CardProps) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <View style={styles.cardContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>¥{amount}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.cardNumber}>•••• {cardNumber.slice(-4)}</Text>
        <View style={styles.mainBadge}>
          <Text style={styles.mainText}>
            {type === "debit" ? "借记卡" : "信用卡"}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default function Cards() {
  const navigation = useNavigation<any>();
  const { cardList } = useCard();

  const cardColors = ["#C5E75E", "#21391E", "#FF6B6B", "#4ECDC4"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>我的卡片</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddCard")}
        >
          <Text style={styles.addButtonText}>添加卡片</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.cardList}>
        {cardList.map((card, index) => (
          <Card
            key={card.id || index}
            name={card.name}
            amount={card.amount}
            income={card.income}
            expense={card.expense}
            cardNumber={card.cardNumber}
            password={card.password}
            type={card.type}
            color={cardColors[index % cardColors.length]}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#000000",
  },
  cardList: {
    flex: 1,
  },
  card: {
    height: 200,
    borderRadius: 20,
    marginBottom: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 16,
    opacity: 0.7,
  },
  mainBadge: {
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  mainText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
