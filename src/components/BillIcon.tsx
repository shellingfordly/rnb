import { Ionicons } from "@expo/vector-icons";

export default function BillIcon({ type }: { type: string }) {
  const IconMap: Record<string, any> = {
    food: "fast-food-outline", // 餐饮
    salary: "wallet-outline", // 工资
    traffic: "car-outline", // 交通
    travel: "airplane-outline", // 旅行
    shopping: "cart-outline", // 购物
    house: "home-outline", // 住房
    entertain: "beer-outline", // 娱乐
    other: "help-circle-outline", // 其他
  };

  return <Ionicons name={IconMap[type]} size={28} color="#FFF" />;
}
