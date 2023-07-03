import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories/';
import Foods from './pages/Foods';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router(){
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = 'Categories' component={Categories} options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#ffa500'}
      }} />
      <Stack.Screen name = 'Foods' component={Foods} options={{
        headerTitle: 'Meals',
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#ffa500'},
        headerTintColor: '#ffa500',
      }} />
      <Stack.Screen name = 'Detail' component={Detail} options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#ffa500'},
        headerTintColor: '#ffa500',
      }} />
    </Stack.Navigator>
  </NavigationContainer>

}


export default Router;