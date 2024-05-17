import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NavbarItem = ({item}) => {
  return (
    <View style={styles.navItem_container}>
      <Text style={styles.navItem_text}>{item.title}</Text>
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
        paddingVertical: 15,
        marginRight: 10,
        borderRadius: 12,
        backgroundColor: "#9ABF5A"
    },
    navItem_text: {
        fontFamily: "Montserrat Medium",
        
    }
})