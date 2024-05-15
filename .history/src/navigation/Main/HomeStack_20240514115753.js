import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})