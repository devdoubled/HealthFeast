import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <View>
      <Text>SettingStack</Text>
    </View>
  )
}

export default SettingStack

const styles = StyleSheet.create({})