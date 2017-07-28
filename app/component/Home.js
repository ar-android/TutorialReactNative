import React, {Component, PropTypes} from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native'

import Detail from './Detail'

export default class Home extends Component{

	static propTypes = {
		title: PropTypes.string.isRequired,
		navigator: PropTypes.object.isRequired,
	}

	_onPressDetail = () => {
	    this.props.navigator.push({
			passProps:{title:''},
			title:'Detail',
			component: Detail
		})
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.content}>
					<Button
					  onPress={this._onPressDetail}
					  title="Open Detail"
					  color='white'
					  accessibilityLabel="Learn more about this purple button"
					/>
				</View>
			</View>
		)
	}

}

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#663399',
		flex:1
	},
	content:{
		marginTop: 100
	},
	buttonStyle:{
		backgroundColor:'#DB0A5B',
		color:'white'
	}
})