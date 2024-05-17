import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NavbarItem = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default NavbarItem

const styles = StyleSheet.create({})