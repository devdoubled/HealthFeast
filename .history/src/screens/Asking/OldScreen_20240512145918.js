import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OldScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <Text>OldScreen</Text>
    </View>
  )
}

export default OldScreen

const styles = StyleSheet.create({})