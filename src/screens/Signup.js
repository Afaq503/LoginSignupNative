import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import backend from '../../assets/backend.png';
import mainlogo from '../../assets/mainlogo.png';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container} >
        <Image style={styles.backendbg} source={backend} />
        <View style={styles.container1} >
          <View style={styles.s1} >
            
          </View>
          
          <ScrollView style={styles.s2} >
            <Text style={styles.text1}>Create New Account</Text>
            <Text style={styles.link}>Already Registered &nbsp;<Text style={styles.link2} onPress={() => navigation.navigate('login')} >Login here</Text></Text>
            <View style={styles.foorm}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input} placeholder="Enter your Name" />
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter your Email" />
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label}>DOB</Text>
              <TextInput style={styles.input} placeholder="Enter your Date of Birth"/>
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} placeholder="Enter your Password" />
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput style={styles.input} placeholder="Confirm your Password" />
            </View>
            <View style={styles.foorm}>
              <Text style={styles.label}>Address</Text>
              <TextInput style={styles.input1} placeholder="Enter your Address" />
            </View>
            
            <Text style={styles.button1} >SignUp</Text>
          </ScrollView>
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
  marginBottom: 60,
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
  height: '8%',
},
s2: {
  backgroundColor: 'white',
  width: '100%',
  height: '92%',
  display: 'flex',
  padding: 20,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
},
foorm: {
  display: 'flex',
  marginVertical: 8,
  width: '100%',
},
label: {
  marginLeft: 15,
  color: '#026139',
  fontSize: 14,
  marginBottom: 3,
},
input: {
  borderRadius: 20,
  color: 'black',
  backgroundColor: '#90EE90',
  paddingHorizontal: 10,
  paddingVertical: 8,
  // margin: 5,
},
input1: {
  borderRadius: 10,
  color: 'black',
  backgroundColor: '#90EE90',
  paddingHorizontal: 10,
  paddingVertical: 10,
  height: 80,
  textAlignVertical: 'top',
  // margin: 5,
},
link: {
  textAlign: 'center',
  color: '#026139',
  fontSize: 15,
},
link2: {
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

export default Signup