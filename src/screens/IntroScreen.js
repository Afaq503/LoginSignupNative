import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import logo from '../../assets/mainlogo.png';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.logoimage} />
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#023020',
    height: '100%',
    width: '100%',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 800,

  },
  logoimage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 110,
  },
});

export default IntroScreen;