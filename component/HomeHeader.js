import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Share} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeHeader({navigation}) {
  const openAppSettings = () =>{
    navigation.navigate("Settings")
  }

  const share = async () => {
    try {
      const result = await Share.share({
        message:
          'start Dart coding | https://www.amazon.com/gp/product/B09L75QHN9',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
          ToastAndroid.showWithGravity(
            "Share this app",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          )

        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex:1}} ><Text style={styles.text}>QR ScanGo</Text></View>
      <View style={{ flex:1,flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={openAppSettings}><Feather solid style={styles.icon}  name="settings" size={24} color="white" /></TouchableOpacity>
        {/*<TouchableOpacity onPress={share}><SimpleLineIcons reverse style={styles.icon} name="share" size={24} color="white" /></TouchableOpacity>*/}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingHorizontal:10
  },
  icon:{
    marginHorizontal:15
  },
  text:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold'
  },
  input: {
    height: 60,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'grey'
  },



})

export default HomeHeader;