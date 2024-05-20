import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const SearchResultItem = () => {
  return (
    <View style={styles.result_item_container}>
      <AntDesign name="pluscircle" size={24} color="black" />
    </View>
  )
}

export default SearchResultItem

const styles = StyleSheet.create({
    result_item_container: {
        padding: 12,
        
    }
})