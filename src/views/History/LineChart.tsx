import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface AnimatedLineChartProps {
  data: {
    labels: string[];
    datasets: { data: number[] }[];
  };
  width: number;
  height: number;
  year?: string;
}

export default function AnimatedLineChart({ 
  data, 
  width = 320, 
  height = 200,
  year = "2023"
}: AnimatedLineChartProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    value: 0,
    date: "",
    x: 0,
    y: 0,
  });
  
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const positionX = useRef(new Animated.Value(0)).current;
  const positionY = useRef(new Animated.Value(0)).current;

  const showTooltip = ({value, x, y}: any) => {
    const monthIndex = Math.floor((x / width) * data.labels.length);
    const month = data.labels[monthIndex];
    
    if (!tooltipVisible) {
      setTooltipData({
        value: value,
        date: `${month} ${year}`,
        x: x,
        y: y
      });
      setTooltipVisible(true);
      
      positionX.setValue(x - 50);
      positionY.setValue(y - 60);
      
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true
      }).start();
    } else {
      Animated.parallel([
        Animated.spring(positionX, {
          toValue: x - 50,
          tension: 40,
          friction: 7,
          useNativeDriver: true
        }),
        Animated.spring(positionY, {
          toValue: y - 60,
          tension: 40,
          friction: 7,
          useNativeDriver: true
        })
      ]).start();

      setTooltipData({
        value: value,
        date: `${month} ${year}`,
        x: x,
        y: y
      });
    }
  };

  const hideTooltip = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => {
      setTooltipVisible(false);
    });
  };

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={data}
        width={width}
        height={height}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(92, 131, 116, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        onDataPointClick={showTooltip}
        decorator={() => (
          <View style={StyleSheet.absoluteFill}>
            <TouchableOpacity
              style={StyleSheet.absoluteFill}
              onPress={hideTooltip}
            />
          </View>
        )}
      />
      {tooltipVisible && (
        <Animated.View
          style={[
            styles.tooltipContainer,
            {
              transform: [
                { translateX: positionX },
                { translateY: positionY },
                { scale: scaleAnim }
              ]
            }
          ]}
        >
          <Text style={styles.tooltipAmount}>
            €{tooltipData.value.toFixed(2)}
          </Text>
          <Text style={styles.tooltipDate}>{tooltipData.date}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 20,
    position: "relative",
  },
  tooltipContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 8,
    borderRadius: 8,
  },
  tooltipAmount: {
    color: "#fff",
    fontWeight: "bold",
  },
  tooltipDate: {
    color: "#fff",
    fontSize: 12,
  },
});