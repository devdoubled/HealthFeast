import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../../components/Main/HeaderButton';
import UserIcon from "../../assets/images/user_icon.png";
import SearchScreen from '../../screens/Main/SearchScreen';
const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <View>
      <Text>SearchStack</Text>
    </View>
  )
}

export default SearchStack

const styles = StyleSheet.create({})