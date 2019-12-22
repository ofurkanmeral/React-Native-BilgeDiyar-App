import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'



export default class Detail extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Default Title')
		}
	};

	render() {
		const { navigate,getParam } = this.props.navigation;
		const title=getParam('title','Default Title');
		return (
			<View style={styles.container}>
				<Text>  {title} </Text>
				<Button
					title="tamam"
					onPress={() => navigate('Home')}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue'
	},

})