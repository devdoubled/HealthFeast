import React, { useState } from "react";
import { StyleSheet } from "react-native";
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

  return (
    <Dropdown
      style={styles.dropdown}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={value}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      iconStyle={styles.iconStyle}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.selectedTextStyle}
      containerStyle={styles.dropdownStyle}
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
    width: 35, 
    height: 35, 
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
});