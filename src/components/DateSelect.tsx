import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth() + 1;
const YEARS = Array.from({ length: 50 }, (_, i) => CURRENT_YEAR - 25 + i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

interface DateSelectProps {
  value: { year: number; month: number };
  onChange: (year: number, month: number) => void;
}

export default function DateSelect({ value, onChange }: DateSelectProps) {
  const [selectedYear, setSelectedYear] = useState(value?.year || CURRENT_YEAR);
  const [selectedMonth, setSelectedMonth] = useState(
    value?.month || CURRENT_MONTH
  );

  const yearScrollRef = useRef<ScrollView>(null);
  const monthScrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    // 初始化滚动位置
    const yearIndex = YEARS.indexOf(selectedYear);
    const monthIndex = selectedMonth - 1;

    yearScrollRef.current?.scrollTo({
      y: yearIndex * ITEM_HEIGHT,
      animated: false,
    });

    monthScrollRef.current?.scrollTo({
      y: monthIndex * ITEM_HEIGHT,
      animated: false,
    });
  }, []);

  const handleScroll = (event: any, setter: Function, items: number[]) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    const newValue = items[index];
    setter(newValue);

    // 通知外部数据变化
    if (setter === setSelectedYear) {
      onChange(newValue, selectedMonth);
    } else {
      onChange(selectedYear, newValue);
    }
  };
  return (
    <View style={styles.container}>
      {/* 年份选择器 */}
      <View style={styles.pickerContainer}>
        <ScrollView
          ref={yearScrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={(e) => handleScroll(e, setSelectedYear, YEARS)}
          style={styles.scrollView}
        >
          <View style={styles.paddingView} />
          {YEARS.map((year) => (
            <View key={year} style={styles.itemContainer}>
              <Text
                style={[
                  styles.itemText,
                  year === selectedYear && styles.selectedText,
                ]}
              >
                {year}年
              </Text>
            </View>
          ))}
          <View style={styles.paddingView} />
        </ScrollView>

        {/* 月份选择器 */}
        <ScrollView
          ref={monthScrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={(e) => handleScroll(e, setSelectedMonth, MONTHS)}
          style={styles.scrollView}
        >
          <View style={styles.paddingView} />
          {MONTHS.map((month) => (
            <View key={month} style={styles.itemContainer}>
              <Text
                style={[
                  styles.itemText,
                  month === selectedMonth && styles.selectedText,
                ]}
              >
                {month}月
              </Text>
            </View>
          ))}
          <View style={styles.paddingView} />
        </ScrollView>
      </View>

      {/* 选择器中间的指示器 */}
      <View style={styles.selectionIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
  },
  scrollView: {
    flex: 1,
  },
  paddingView: {
    height: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
    color: "#333",
  },
  selectedText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  selectionIndicator: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    marginTop: -ITEM_HEIGHT / 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});
