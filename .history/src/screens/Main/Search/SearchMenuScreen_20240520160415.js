import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchMenuScreen = () => {
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </View>
  )
}

export default SearchMenuScreen

const styles = StyleSheet.create({})