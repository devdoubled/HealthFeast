import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const RecipeScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <Stack.Navigator initialRouteName="Main">
    <Stack.Screen 
      name="Main" 
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
      name="Details" 
      component={DetailsScreen} 
      options={{ title: 'Details' }}
    />
  </Stack.Navigator>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#ffffff",
  },
});
