import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';

const App = () => {

  // const [isload, setisload ] = useState(false);

  // setTimeout(() => {
  //   setisload(true)
  // },5000 );

  return (
    <View style={styles.container} >
      {/* <Text>{isload ? <Welcome/> : <IntroScreen/> }</Text> */}

      {/* <IntroScreen /> */}
      {/* <Welcome /> */}
      {/* <Login /> */}
      <Signup />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App