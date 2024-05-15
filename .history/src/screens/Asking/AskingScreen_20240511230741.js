import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import askingOptions from '../../data/askingOptions'
const AskingScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList data={askingOptions} renderItem={({ item }) => <OnboardingItem item={item} />}/>
    </View>
  )
}

export default AskingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})