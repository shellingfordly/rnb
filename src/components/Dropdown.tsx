import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  value: string;
  title: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  options: { icon?: string; label: string; color?: string }[];
  onSelect: (value: string) => void;
}

export default function Dropdown({
  value,
  title,
  icon,
  header,
  options,
  onSelect,
}: DropdownProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
        {header ? (
          header
        ) : (
          <View>
            <View style={[styles.iconContainer, icon ? {} : styles.avatar]}>
              {icon || <Text>SM</Text>}
            </View>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          </View>
        )}
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{title}</Text>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => {
                  onSelect(option.label);
                  setVisible(false);
                }}
              >
                {option.icon && (
                  <View
                    style={[
                      styles.optionIcon,
                      option.color ? { backgroundColor: option.color } : {},
                    ]}
                  >
                    <Text>{option.icon}</Text>
                  </View>
                )}
                <Text style={styles.optionLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  },
  title: {
    color: "#666",
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 15,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  optionLabel: {
    fontSize: 16,
  },
});
