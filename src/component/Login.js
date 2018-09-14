import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import ButtonLogin from './ButtonLogin'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            authenticating: false,
        };
    }

    handleClick = () => {
        console.log('pressed');
    }

    onPressSignIn = () => {
        this.setState({
            authenticating: true
        })
    }
    
    renderCurrentState = () => {
        if(this.state.authenticating) {
            retrun (
                <View>
                    <ActivityIndicator size = 'large'/>
                </View>
            )
        }
        return (
            <View>
                <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Enter Your Email...'
                    autoCorrect = {false}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />
                <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    returnKeyType="go"
                    placeholder='Enter Your Password...'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                />
                <ButtonLogin clickLogin = {this.onPressSignIn} ></ButtonLogin>
            </View>
        )
    }

    render() {
        return (
            <View>
                { this.renderCurrentState() }
           </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        margin: 10,
        paddingLeft: 20,
        color: '#fff',
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 30,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})