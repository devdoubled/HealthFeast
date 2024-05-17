import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NavbarItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => handleTabPress(item.key)}
      style={[
        styles.tab,
        selectedTab === item.key ? styles.activeTab : styles.inactiveTab,
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
    navItem_container: {
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginRight: 10,
        borderRadius: 12,
        backgroundColor: "#2E2E2E"
    },
    navItem_text: {
        fontFamily: "Montserrat Medium",
        fontSize: 15,
        color: "#FFFFFF"
    }
})