import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <ScrollView>
      <Text>SearchScreen</Text>
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
      },
})