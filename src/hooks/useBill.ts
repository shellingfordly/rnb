import { useLocalStorage } from "./useLocalStorage";

export const BillCategoryColor: Record<string, string> = {
  food: "#FFE4F3", // 餐饮
  salary: "#FFE4BA", // 工资
  traffic: "#E4EEFF", // 交通
  travel: "#B0E0E6", // 旅行
  shopping: "#ADD8E6", // 购物
  house: "#87CEFA", // 住房
  entertain: "#4682B4", // 娱乐
  other: "#B0C4DE", // 其他
}

export function useBill() {
  const defaultBillList: BillItem[] = [
    {
      id: "1",
      name: "Dribbble Premium",
      date: "2024-11-26 11:10:18",
      amount: 180,
      type: "expense",
      category: "food"
    },
    {
      id: "2",
      name: "Snapchat Ads",
      date: "2024-11-26 11:10:18",
      amount: 24,
      type: "income",
      category: "salary"
    },
    {
      id: "3",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "traffic"
    },
    {
      id: "4",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "travel"
    },
    {
      id: "5",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "shopping"
    },
    {
      id: "6",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "house"
    },
    {
      id: "7",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "entertain"
    },
    {
      id: "8",
      name: "Skype Premium",
      date: "2024-11-26 11:10:18",
      amount: 60,
      type: "expense",
      category: "other"
    }
  ]

  const [billList, setBillList] = useLocalStorage<BillItem[]>('Bill_List', []);

  return {
    BillCategoryColor,
    billList,
    setBillList
  }
}