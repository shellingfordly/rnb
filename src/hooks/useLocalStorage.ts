import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useLocalStorage = <T = any>(key: string, initialValue: T): [T, (value: T) => Promise<boolean>] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    // 组件加载时读取存储的数据
    const loadData = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialValue;
        setStoredValue(value);
      } catch (error) {
        console.error('读取数据失败:', error);
      }
    };
    loadData();
  }, [key, initialValue]);

  // 保存数据的方法
  const setValue = async (value: T) => {
    try {
      const valueToStore = value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      return true
    } catch (error) {
      console.error('保存数据失败:', error);
      return false
    }
  };

  return [storedValue, setValue];
};