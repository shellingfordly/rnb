import { useLocalStorage } from "./useLocalStorage";

export function useBill() {
  const [billList, setBillList] = useLocalStorage('Bill_List', []);

  return {
    billList,
    setBillList
  }
}