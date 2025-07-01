import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
  Button,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';


function QRCodeTypes() {
  return (
      <View>
          
      	
      		<View style={{flexDirection:'row', alignItems:"center", marginTop:10}}>
      			<Entypo name="info-with-circle" size={20} color="#000" />
      			<Text style={{fontSize:20, fontWeight:'bold', color:'#000000', marginLeft:10}}>QR Code Types</Text>
      		</View>
      		<View style={styles.cardContainer}>
      			<View style={styles.tableHeader}>
      				<Text style={{flex:1, ...styles.text, fontWeight:'bold'}}>Type</Text>
      				<Text style={{flex:3, ...styles.text, fontWeight:'bold'}}>Description</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>URL</Text>
      				<Text style={{flex:3, ...styles.text}}>link to any webpage</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>Text</Text>
      				<Text style={{flex:3, ...styles.text}}>represents plain text</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>Location</Text>
      				<Text style={{flex:3, ...styles.text}}>for a geographical position (Google maps)</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>Wifi</Text>
      				<Text style={{flex:3, ...styles.text}}>connects to a wireless network</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>SMS</Text>
      				<Text style={{flex:3, ...styles.text}}>for sending SMS on a smartphone</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>Mail</Text>
      				<Text style={{flex:3, ...styles.text}}>initiates email draft to a recipient</Text>
      			</View>
      			<View style={styles.tableContent}>
      				<Text style={{flex:1, ...styles.text, color:'red'}}>Event</Text>
      				<Text style={{flex:3, ...styles.text}}>triggers calendar entry for any event</Text>
      			</View>
      		</View>


      </View>
  );
}



const styles = StyleSheet.create({
	tableHeader:{
		flexDirection:'row',
	    borderBottomWidth: 2,
	    borderBottomColor: 'black',
	    paddingVertical: 10,
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

})

export default QRCodeTypes;