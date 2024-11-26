import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";
import { Image } from "react-native";

const BillIcon = memo(({ type }: { type: string }) => {
  const IconMap: Record<string, any> = {
    food: "fast-food-outline", // 餐饮
    salary: "wallet-outline", // 工资
    traffic: "car-outline", // 交通
    travel: "airplane-outline", // 旅行
    shopping: "cart-outline", // 购物
    house: "home-outline", // 住房
    // house: "/assets/icons/house.svg", // 住房
    entertain: "beer-outline", // 娱乐
    other: "help-circle-outline", // 其他
  };

  // const iconName = IconMap[type];
  // if (!iconName) return null;

  // if (iconName.includes(".svg")) {
  //   return <Image source={iconName} style={{ width: 28, height: 28 }} />;
  // } else
  
  return <Ionicons name={IconMap[type]} size={28} color="#FFF" />;
});

export default BillIcon;
