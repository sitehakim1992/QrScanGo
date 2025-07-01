import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screen/HomeScreen';
import AppSettings from '../screen/AppSettings';

import HomeHeader from '../component/HomeHeader';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={({navigation})=>({
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => <HomeHeader navigation={navigation}  />
        })}
       />
      <Stack.Screen 
        name="Settings" 
        component={AppSettings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Stack.Navigator>
  );
}

export default HomeStack;