import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

interface CardProps {
  name: string;
  amount: string;
  lastFourDigits: string;
  isMain?: boolean;
  color?: string;
}

const Card = ({ name, amount, lastFourDigits, isMain, color = "#FFFFFF" }: CardProps) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <View style={styles.cardContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>${amount}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.cardNumber}>•••• {lastFourDigits}</Text>
        {isMain && (
          <View style={styles.mainBadge}>
            <Text style={styles.mainText}>Main card</Text>
          </View>
        )}
      </View>
    </View>
  </View>
);

export default function Cards() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Card</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ New card</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.cardList}>
        <Card
          name="Linda Srikandi"
          amount="112,411"
          lastFourDigits="2451"
          isMain={true}
          color="#C5E75E"
        />
        <Card
          name="Linda Srikandi"
          amount="112,411"
          lastFourDigits="0095"
          color="#2A2A2A"
        />
        <Card
          name="Linda Srikandi"
          amount="12,000"
          lastFourDigits="1122"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#000000',
  },
  cardList: {
    flex: 1,
  },
  card: {
    height: 200,
    borderRadius: 20,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
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
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 16,
    opacity: 0.7,
  },
  mainBadge: {
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  mainText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});