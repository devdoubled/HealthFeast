import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const SearchResultItem = () => {
  return (
    <Pressable style={styles.result_item_container}>
      <AntDesign name="pluscircle" size={26} color="#9ABF5A" />
      <View style={styles.result_text_container}>
        <Text style={styles.result_tile}>Salad tr</Text>
        <Text style={styles.result_desc}></Text>
      </View>
    </Pressable>
  )
}

export default SearchResultItem

const styles = StyleSheet.create({
    result_item_container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderColor: "#464646",
    },
    result_text_container: {

    }
})