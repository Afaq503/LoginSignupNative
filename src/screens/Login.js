import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import backend from '../../assets/backend.png';
import mainlogo from '../../assets/mainlogo.png';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container} >
        <Image style={styles.backendbg} source={backend} />
        <View style={styles.container1} >
          <View style={styles.s1} >
            <Image style={styles.logo} source={mainlogo}/>
            <Text style={styles.text}
             onPress= {()=> navigation.navigate('welcome') } >Book & Play</Text>
            <Text style={styles.small1}>Booking Ground and Play Game</Text>
          </View>
          <View style={styles.s2} >
            <Text style={styles.text1}>Login</Text>
            <Text style={styles.text2}>Sign in to continue</Text>
            <View style={styles.foorm}>
              <Text style={styles.label} >Email</Text>
              <TextInput style={styles.input} placeholder="Enter your Email" />
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label} >Password</Text>
              <TextInput style={styles.input} placeholder="Enter Your Password" />
            </View>
            <View style={styles.fp}>
              <Text style={styles.link}>Forget Password?</Text>
            </View>
            <Text style={styles.button1} >Login</Text>
            <Text style={styles.link2}>Don't have an account? &nbsp;<Text style={styles.link1}
            onPress={() => navigation.navigate('signup')}
            >Create a new account</Text></Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
},
backendbg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    zIndex: -1,
},
logo: {
  width: 200,
  height: 200,
  borderRadius: 110,
  marginBottom: 20,
},
text2: {
  textAlign: 'center',
  fontSize: 20,
  color: 'black',
},
text1: {
  textAlign: 'center',
  fontSize: 30,
  color: 'black',
},
text: {
  fontSize: 30,
  color: 'white',
},
container1: {
  display: 'flex' ,
  alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
},
small1: {
  color: 'white',
  fontSize: 17,
},
s1: {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  height: '45%',
},
s2: {
  justifyContent: 'center',
  backgroundColor: 'white',
  width: '100%',
  height: '55%',
  display: 'flex',
  padding: 20,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
},
foorm: {
  display: 'flex',
  marginVertical: 10,
  width: '100%',
},
label: {
  marginLeft: 15,
  color: '#026139',
  fontSize: 14,
},
input: {
  borderRadius: 20,
  color: 'black',
  backgroundColor: '#90EE90',
  padding: 10,
  margin: 5,
},
link: {
  color: '#026139',
  fontSize: 15,
},
link2: {
  textAlign: 'center',
  color: '#026139',
  fontSize: 15,
},
link1: {
  color: '#023020',
  fontSize: 15,
},
fp: {
  display: 'flex',
  alignItems: 'flex-end',
  marginHorizontal: 5,
},
button1: {
  backgroundColor: '#023020',
  padding: 10,
  margin: 10,
  borderRadius: 10,
  fontSize: 25,
  minWidth: 150,
  color: 'white',
  textAlign: 'center',
},
})

export default Login