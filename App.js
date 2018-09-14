'use strict';
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	Slider,
	Image,
	View,
	TextInput,
	AppRegistry,
	TouchableHighlight,
} from 'react-native';
const styles = require('./src/css/style.js');
import Login from './src/component/Login';
import * as firebase from 'firebase';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBhhFIK0cdVGQCITx0OKlH0h8vR0sK6mes',
			authDomain: 'react-native-6794a.firebaseapp.com',
			databaseURL: 'https://react-native-6794a.firebaseio.com/',
			projectId: 'react-native-6794a'
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Login/>
			</View>
		);
	}
}
