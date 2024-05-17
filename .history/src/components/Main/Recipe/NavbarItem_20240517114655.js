import React from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'

const NavbarItem = ({item, selectedTab, handleTabPress}) => {
  return (
    <Pressable
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
    </Pressable>
  )
}

export default NavbarItem

const styles = StyleSheet.create({
  tab: {
    flex: Platform.OS === "ios" ? 1 : 0,
    width: Platform.OS === "ios" ? 0
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#FFFFFF"
  }
})