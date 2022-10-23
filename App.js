import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';



const Stack = createNativeStackNavigator();

const App = () => {

  // const [isload, setisload ] = useState(false);

  // setTimeout(() => {
  //   setisload(true)
  // },5000 );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='welcome' component={Welcome} options ={ { headerShown : false }} />
        <Stack.Screen name='login' component={Login} options ={ { headerShown : false }} />
        <Stack.Screen name='signup' component={Signup} options ={ { headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



export default App