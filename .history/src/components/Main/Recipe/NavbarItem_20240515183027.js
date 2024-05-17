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
    width: 130
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "#9ABF5A",
  },
  inactiveTab: {
    backgroundColor: "#2E2E2E",
  },
  tabText: {
    fontFamily: "Montserrat Medium",
    fontSize: 15,
    color: "#FFFFFF"
  }
})