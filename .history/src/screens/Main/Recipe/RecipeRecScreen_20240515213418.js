import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import React from 'react'

const RecipeRecScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <Text>RecipeRecScreen</Text>
    </View>
  )
}

export default RecipeRecScreen

const styles = StyleSheet.create({})