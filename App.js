import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	Slider,
	View,
	TextInput,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text>Color Style</Text>
				</View>
				<View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<View style = { styles.pickColor}>
						<View style= {{ flex: 2, flexDirection:'column' }}>
							<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
								<Text>R</Text>
								<Slider style= {{ width: 200}}/>
								<TextInput value = "23" style= {styles.textInput}/>
							</View>
							<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
								<Text>G</Text>
								<Slider style= {{ width: 200}}/>
								<TextInput value = "25" style= {styles.textInput}/>
							</View>
							<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
								<Text>B</Text>
								<Slider style= {{ width: 200}}/>
								<TextInput value = "27" style= {styles.textInput}/>
							</View>
						</View>
						<View style= {{ flex: 1, backgroundColor: 'red' }}></View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	},
	header: {
		height:65,
		backgroundColor: '#ECEFF1',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'gray',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.6,
		elevation: 5, // Shadown Android 1-5
		marginTop: Platform.select({
			ios: 15,
			android: 0
		}),
	},
	pickColor: {
		width: 330,
		height: 300,
	},
	textInput: {
		width: 40, 
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1,
		borderRadius: 6,
	}
});
