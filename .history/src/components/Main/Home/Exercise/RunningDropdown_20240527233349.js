import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const RunningDropdown = () => {
  const [value, setValue] = useState("Item 1");
  const [hideDropdown, setHideDropdown] = useState(false);
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
  ];

  const renderItem = (item, index, isSelected) => {
    return (
      <View style={isSelected ? styles.selectedItem : styles.item}>
        <Text style={isSelected ? styles.selectedItemText : styles.itemText}>
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <Dropdown
      data={data}
      labelField="label"
      valueField="value"
      placeholder={value}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      style={styles.dropdown}
      iconStyle={styles.iconStyle}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.selectedTextStyle}
      containerStyle={styles.dropdownStyle}
      renderItem={renderItem} // Add the renderItem prop
    />
  );
};

export default RunningDropdown;

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: "#E55733",
  },
  selectedTextStyle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  dropdownStyle: {
    backgroundColor: "#2E2E2E",
    borderColor: "#E55733",
    borderRadius: 8,
    marginTop: 5,
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  selectedItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "red",
  },
  itemText: {
    color: "#E55733", // default item text color
  },
  selectedItemText: {
    color: "#FFFFFF", // text color when item is selected
  },
});
