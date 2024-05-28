import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RunningDropdown = () => {
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

const styles = StyleSheet.create({})