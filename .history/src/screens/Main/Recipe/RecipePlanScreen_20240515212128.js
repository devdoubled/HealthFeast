import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import NavbarList from "../../../components/Main/Recipe/NavbarList";
const RecipePlanScreen = ({navigation}) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation}/>
    </View>
  )
}

export default RecipePlanScreen

const styles = StyleSheet.create({})