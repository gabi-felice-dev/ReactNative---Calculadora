import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../styles/colors'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Colors.ultraViolet,
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 70,
        color: '#fff',
        textAlign: 'Center'
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>