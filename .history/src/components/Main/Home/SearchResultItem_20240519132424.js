import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
const SearchResultItem = () => {
  return (
    <Pressable style={styles.result_item_container}>
      <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
      <View></View>
    </Pressable>
  )
}

export default SearchResultItem

const styles = StyleSheet.create({
    result_item_container: {
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: "#464646",
    }
})