
import { useEffect, useMemo, useState } from "react";
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
      name: "Test-01",
      date: "2024-10-01 11:10:18",
      amount: 180,
      type: "expense",
      category: "food"
    },
    {
      id: "2",
      name: "Test-02",
      date: "2024-11-02 11:10:18",
      amount: 900,
      type: "income",
      category: "salary"
    },
    {
      id: "3",
      name: "Test-03",
      date: "2024-12-03 11:10:18",
      amount: 869,
      type: "expense",
      category: "traffic"
    },
    {
      id: "4",
      name: "Test-04",
      date: "2024-01-04 11:10:18",
      amount: 145,
      type: "expense",
      category: "travel"
    },
    {
      id: "5",
      name: "Test-05",
      date: "2024-02-05 11:10:18",
      amount: 766,
      type: "expense",
      category: "shopping"
    },
    {
      id: "6",
      name: "Test-06",
      date: "2024-03-06 11:10:18",
      amount: 640,
      type: "expense",
      category: "house"
    },
    {
      id: "7",
      name: "Test-07",
      date: "2024-04-07 11:10:18",
      amount: 124,
      type: "expense",
      category: "entertain"
    },
    {
      id: "8",
      name: "Test-08",
      date: "2024-05-08 11:10:18",
      amount: 567,
      type: "expense",
      category: "other"
    },
    {
      id: "9",
      name: "Test-09",
      date: "2024-06-09 11:10:18",
      amount: 124,
      type: "expense",
      category: "other"
    },
    {
      id: "10",
      name: "Test-10",
      date: "2024-07-10 11:10:18",
      amount: 124,
      type: "expense",
      category: "other"
    },
    {
      id: "11",
      name: "Test-11",
      date: "2024-08-11 11:10:18",
      amount: 124,
      type: "expense",
      category: "other"
    },
    {
      id: "12",
      name: "Test-12",
      date: "2024-09-12 11:10:18",
      amount: 124,
      type: "expense",
      category: "other"
    },
  ]
  const [billList, setBillList] = useLocalStorage<BillItem[]>('Bill_List', []);
  const { billListByCategory, amountInfo } = useMemo(() => {
    if (!billList?.length) {
      return {
        billListByCategory: [],
        amountInfo: { income: 0, expense: 0 }
      };
    }

    const _billCategoryMap: Record<string, BillCategoryInfo> = {};
    const _billCategory: BillCategoryInfo[] = [];
    const _amountInfo = {
      income: 0,
      expense: 0,
    };

    billList.forEach(item => {
      _amountInfo[item.type] += item.amount;

      if (!_billCategoryMap[item.category]) {
        _billCategoryMap[item.category] = {
          name: item.category,
          value: 0,
          type: item.type
        };
        _billCategory.push(_billCategoryMap[item.category]);
      }
      _billCategoryMap[item.category].value += item.amount;
    });

    return {
      billListByCategory: _billCategory,
      amountInfo: _amountInfo
    };
  }, [billList]);

  return {
    BillCategoryColor,
    billList,
    billListByCategory,
    amountInfo,
  }
}