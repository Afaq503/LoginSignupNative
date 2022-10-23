import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import backend from '../../assets/backend.png';
import mainlogo from '../../assets/mainlogo.png';


const Welcome = () => {
  return (
    <View style={styles.container} >
        <Image style={styles.backendbg} source={backend} />
        <View style={styles.container1}>
            <Text style={styles.head}>Welcome The Sports Arena Booking App</Text>
            <Image style={styles.logo1} source={mainlogo} />
            <TouchableOpacity>
                <Text style={styles.button1} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button1} >SignUp</Text>
            </TouchableOpacity>
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
    head: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
    },
    container1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    logo1: {
        width: 200,
        height: 200,
        borderRadius: 110,
        marginBottom: 60,
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

export default Welcome