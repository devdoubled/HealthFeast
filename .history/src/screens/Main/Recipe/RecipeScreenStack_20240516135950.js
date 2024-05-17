import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecipeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="RecipeScreen">
    <Stack.Screen 
      name="RecipeScreen" 
      options={{ headerShown: false }} 
    >
      {() => (
        <View style={styles.container}>
          <NavbarList
            width={width}
            navigation={navigation}
            route={route}
          />
        </View>
      )}
    </Stack.Screen>
    <Stack.Screen 
      name="RecipeDetailScreen" 
      component={DetailsScreen} 
      options={{ title: 'Details' }}
    />
  </Stack.Navigator>
  )
}

export default RecipeScreenStack

const styles = StyleSheet.create({})