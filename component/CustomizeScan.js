import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


function HowToUse() {


	const handleSettingScreen = () => {

	}

  return (
      <View>
      		<View style={{flexDirection:'row', alignItems:"center", marginTop:10}}>
      			<Ionicons name="options" size={25} color="#000" />
      			<Text style={{fontSize:20, fontWeight:'bold', color:'#000000', marginLeft:10}}>Other scan option</Text>
      		</View>  
      	  <TouchableOpacity style={styles.button} onPress={handleSettingScreen} activeOpacity={0.7}>    	
	      		<View style={{...styles.cardContainer,flexDirection:'row', alignItems:"center",  marginTop:10}}>
	      			<Ionicons name="options" size={20} color="#000" />
	      			<Text style={{fontSize:20, fontWeight:'bold', color:'#000000', marginLeft:10}}>Customize your scan</Text>
	      		</View>
      		</TouchableOpacity>


      </View>
  );
}



const styles = StyleSheet.create({
	tableHeader:{
		flexDirection:'row',
		paddingVertical:10
	},
	tableContent:{
		flexDirection:'row',
	    borderBottomWidth: 2,
	    borderBottomColor: 'grey',
	    paddingVertical: 10,

	},	
	text:{
		fontSize:15,
		color: 'black'
	},
	cardContainer: {
		backgroundColor: '#fff', // White background
		borderRadius: 8, // Rounded corners
		marginHorizontal: 0, // Horizontal margin for spacing from screen edges
		marginTop: 10, // Top margin for spacing between cards
		padding: 16, // Inner padding for content
		// Shadow properties for elevation effect (Android & iOS)
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3, // Android specific shadow
	},     
  linkText: {
        color: 'blue', // Standard link color
        //textDecorationLine: 'underline', // Underline the text
        fontSize: 16,
        fontWeight: 'bold',
      },

})

export default HowToUse;

