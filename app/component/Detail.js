import React, {Component, PropTypes} from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class Detail extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.content} >
					<Text>Hello datail</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#446CB3',
		flex:1
	},
	content:{
		backgroundColor:'white',
		marginTop:100,
		marginLeft:20,
		marginRight: 20,
		padding:20
	}
})