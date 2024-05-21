import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchMealScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </ScrollView>
  )
}

export default SearchMealScreen

const styles = StyleSheet.create({})