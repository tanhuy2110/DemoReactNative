import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Loading.....</Text>
				<ActivityIndicator></ActivityIndicator>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

