import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  View,
  Button,
  Image,
  Modal,
  ImageBackground,
  Pressable,
} from 'react-native';


import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



function AppSettings() {

  const [openModal, setOpenModal] = React.useState(false)


  const handleSettings = () => {
    setOpenModal(true)
  }

  return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={{padding:10}}>

          <View>
            <View style={{flex:1, alignItems: 'center',}}>
              <Image style={styles.welcomeImage} source={require('../assets/images/qrcode-rbg.png')} />
              <Text style={styles.headerTitle}>App Settings</Text>
            </View>  
          </View>  
          <TouchableOpacity onPress={handleSettings} style={{...styles.card, flexDirection:'row', alignItems:'center'}}>
            <Foundation style={{flex:1}} name="background-color" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>Background</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>Change background Colors.</Text>
            </View>
          </TouchableOpacity>  

          <TouchableOpacity style={{...styles.card, flexDirection:'row'}}>
            <Foundation style={{flex:1}} name="text-color" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>App NavBar</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>Change navigation bar Colors.</Text>
            </View>
          </TouchableOpacity> 

          <TouchableOpacity style={{...styles.card, flexDirection:'row'}}>
            <Feather style={{flex:1}} name="moon" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>Theme</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>Dark or light theme.</Text>
            </View>
          </TouchableOpacity> 

          <TouchableOpacity style={{...styles.card, flexDirection:'row'}}>
            <MaterialIcons style={{flex:1}} name="format-size" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>Text Size</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>Change text font size.</Text>
            </View>
          </TouchableOpacity> 

          <TouchableOpacity style={{...styles.card, flexDirection:'row'}}>
            <MaterialIcons style={{flex:1}} name="help-center" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>About app</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>About this app, quations.</Text>
            </View>
          </TouchableOpacity> 
              

          <TouchableOpacity style={{...styles.card, flexDirection:'row'}}>
            <Ionicons style={{flex:1}} name="scan" size={20} color="blue" />
            <Text style={{flex:3, fontSize:16, fontWeight:'bold',color:'black'}}>Scan</Text>
            <View style={{flex:5, fontSize:12}}>
              <Text>Customize your scan UI.</Text>
            </View>
          </TouchableOpacity> 
              
              

          </View>
        </ScrollView>



    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={() => {
        setOpenModal(false)
      }}>
      <View
        style={{
          height: "70%",
          marginTop: 'auto',
          margin:0,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          paddingVertical:20,
          paddingHorizontal:10,
          backgroundColor:'white'
        }}>
        <Text style={{color: 'black', fontSize:20, fontWeight:'bold', textAlign:'left'}}>hi setting</Text>
        <View style={{position:'absolute', top:10, right:10}} >
          <Pressable onPress={()=>setOpenModal(false)} >
            <MaterialIcons name='close' color='black' size={30} />
          </Pressable>
        </View>

        <View>
            <View style={{paddingVertical:10}} >
              <Text style={{fontSize:15, color:'black', fontWeight:'bold'}} >hello settings</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between'}} >
              <Pressable  onPress={()=>handleBackground('ss4')} >
                  <Image style={{width:100, height:100,}} source={require('../assets/background/ss4.jpeg')} />
              </Pressable>

              <Pressable  onPress={()=>handleBackground('ss5')} >
                  <Image style={{width:100, height:100,}} source={require('../assets/background/ss5.jpeg')} />
              </Pressable>

              <Pressable  onPress={()=>handleBackground('ss1')} >
                  <Image style={{width:100, height:100,}} source={require('../assets/background/ss1.jpeg')} />
              </Pressable>
            </View>         
        </View>

      </View>

    </Modal>

      </SafeAreaView> 
  );
}
const styles = StyleSheet.create({

  
  card: {
    backgroundColor: '#fff', // White background
    borderRadius: 8, // Rounded corners
    marginHorizontal: 0, // Horizontal margin for spacing from screen edges
    marginVertical: 4, // Top margin for spacing between cards
    padding: 16, // Inner padding for content
    // Shadow properties for elevation effect (Android & iOS)
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },  
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000",
  },
  welcomeImage:{
    width:200,
    height:150,
    marginBottom:20,
  },
  text:{
    fontSize:15,
  },
});
export default AppSettings;