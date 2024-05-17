import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const NavbarItem = ({item, selectedTab, handleTabPress}) => {
  return (
    <TouchableOpacity
      onPress={() => handleTabPress(item.screen_name, item.title)}
      style={[
        styles.tab,
        item.isMiddle ? { marginHorizontal: 10 } : {},
        selectedTab === item.title ? styles.activeTab : styles.inactiveTab,
      ]}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === item.title ? styles.activeText : styles.inactiveText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}

export default NavbarItem

const styles = StyleSheet.create({
  tab: {
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "#66cc33",
  },
  inactiveTab: {
    backgroundColor: "#4d4d4d",
  },
  tabText: {
    fontSize: 16,
  },
  activeText: {
    color: "#ffffff",
  },
  inactiveText: {
    color: "#cccccc",
  },
})