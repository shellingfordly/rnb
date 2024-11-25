import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

// 保存数组到本地存储
const saveArrayToStorage = async (key: string, array: any[]) => {
  try {
    const jsonValue = JSON.stringify(array);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('保存数据失败:', error);
  }
};

// 从本地存储读取数组
const getArrayFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('读取数据失败:', error);
    return [];
  }
};

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