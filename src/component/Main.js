import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    render() {
        const { currentUser } = this.state
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
