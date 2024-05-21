import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchMenuScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </ScrollView>
  )
}

export default SearchMenuScreen

const styles = StyleSheet.create({})