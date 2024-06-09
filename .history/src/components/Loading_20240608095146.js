import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})