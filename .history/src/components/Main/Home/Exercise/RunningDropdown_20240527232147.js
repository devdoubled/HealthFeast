import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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

  const renderItem = (item) => {
    return (
      <Pressable style={styles.item} onPress={() => handleSelect(item)}>
        <Text style={styles.itemText}>{item.label}</Text>
      </Pressable>
    );
  };

  const handleSelect = (item) => {
    setValue(item.value);
    setHideDropdown(true); // Hide the dropdown list when an item is selected
  };
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
              containerStyle={styles.dropdownStyle} // Apply the dropdown list style here
              renderItem={renderItem} // Custom render each item
              activeColor={styles.activeColor}
              visibleSelectedItem={hideDropdown}
            />
  )
}

export default RunningDropdown

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        height: 50,
        borderColor: '#E55733',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 8,
      },
      iconStyle: {
        width: 30,       // Width of the icon
        height: 30,      // Height of the icon
        tintColor: '#E55733', // Color of the icon
      },
      selectedTextStyle: {
        fontFamily: "Montserrat-Medium",
        fontSize: 17,
        color: "#FFFFFF",
      },
      dropdownStyle: {
        backgroundColor: '#2E2E2E', 
        borderColor: "#E55733",
        borderRadius: 8,
        marginTop: 5             
      },
      item: {
        borderRadius: 12,
        paddingVertical: 16,  // Vertical padding for each item
        paddingHorizontal: 16, // Horizontal padding for each item
      },
      itemText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 17,
        color: "#E55733",
      },
})