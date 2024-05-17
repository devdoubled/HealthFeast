import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const NavbarItem = ({item, selectedTab, handleTabPress}) => {
  return (
    <TouchableOpacity
      onPress={() => handleTabPress(item.screen, item.title)}
      style={[
        styles.tab,
        selectedTab === item.title ? styles.activeTab : styles.inactiveTab,
      ]}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === item.key ? styles.activeText : styles.inactiveText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  )
}

export default NavbarItem

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
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