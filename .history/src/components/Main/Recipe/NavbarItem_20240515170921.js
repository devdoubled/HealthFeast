import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NavbarItem = ({item}) => {
  return (
    <View style={styles.navItem_container}>
      <Text>{item.title}</Text>
    </View>
  )
}

export default NavbarItem

const styles = StyleSheet.create({
    navItem_container: {
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginRight: 15,
        backgroundColor: "#9ABF5A"
    }
})