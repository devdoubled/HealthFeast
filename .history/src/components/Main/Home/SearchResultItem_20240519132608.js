import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const SearchResultItem = () => {
  return (
    <View style={styles.result_item_container}>
      <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
      <View>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  )
}

export default SearchResultItem

const styles = StyleSheet.create({
    result_item_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: "#464646",
    }
})