import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../styles/colors'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: Colors.pinkLavender,
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderColor: Colors.white,
        borderBottomWidth: 1
    },
    displayValue: {
        fontSize: 30,
        color: Colors.white,
        width: '65%',
        textAlign: 'center',
        fontFamily: 'monospace',
        fontWeight: '900'
    },
    displayValueMenor: {
        fontSize: 15,
        fontWeight: '700'
    },
    image: {
        height: '50%',
        aspectRatio: 1, 
        resizeMode: 'contain', 
      },
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}>GFELICE</Text>
        <Text style={[styles.displayValue, styles.displayValueMenor]}>{'['}React Native{']'}</Text>

        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
      />     
    </View>