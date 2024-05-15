import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/Main/HomeScreen';
import { Button } from 'react-native';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={({ navigation }) => ({
          title: 'My Custom Home',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#00cc00"
            />
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack