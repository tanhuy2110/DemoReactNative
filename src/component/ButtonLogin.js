import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ButtonLogin extends Component {
    
    handleClickBt = () => {
        // console.log('pressed');
        this.props.clickLogin()
    }
    
    render() {
        return (
            <TouchableOpacity onPress = { this.handleClickBt }  style = {styles.button}>
                <Text style = {styles.text}> Login </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        width: '100%',
        backgroundColor: '#00aeef',
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18
    }
})
