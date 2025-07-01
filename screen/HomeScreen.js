import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  ToastAndroid,
} from 'react-native';

import RNFS from 'react-native-fs';


import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


import ScanPlugin from '@hmscore/react-native-hms-scan';
import Clipboard from '@react-native-clipboard/clipboard';

import QRCodeTypes from '../component/QRCodeTypes';
import HowToUse from '../component/HowToUse';
// import CustomizeScan from '../component/CustomizeScan';

function HomeScreen() {

  const [scanResult, setScanResult] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false);
  const [copiedText, setCopiedText] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState('');


  const getBase64StringFromDataURL = (dataURL) =>
      dataURL.replace('data:', '').replace(/^.+,/, '');


  const convertImageToBase64 = async (imagePath) => {
    try {
      const base64 = await RNFS.readFile(imagePath, 'base64');
      return base64;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return null;
    }
  };


  const uploadQRCode = async () => {

    let imageUri = ''
    await requestStoragePermission();

    await launchImageLibrary({ mediaType: 'photo' },(name)=>{
      //setSourceFile(name.assets[0].uri);
      //console.log(name)
      if(name.didCancel == true){

      }else{
        setSelectedImage(name.assets[0].uri)
        imageUri = name.assets[0].uri;
      }
      //
      // setCancelCam(name.didCancel)
    })
    return imageUri

  }

  const scanSelectedCodeQR = async () => {
    // upload image from local storage
   const imageUri = await uploadQRCode().then(val=>val);

    // const imageUri = await convertImageToBase64(uri).then(val=>val);
   // Example usage:
     // const imageUri = 'file:///path/to/your/image.jpg'; // Local file path
     const base64String = await convertImageToBase64(imageUri);
     if (base64String) {
       //console.log('Base64 image string:', base64String);

         let ScanFrameRequest = {
             // String of Base64 encoded bitmap image of Aztec barcode
             data: base64String,
             scanType: ScanPlugin.ScanType.All,
             additionalScanTypes: [],
             photoMode: true,
             multiMode: false,
             parseResult: true,
         };
     
     
         //Calling defaultView API with the request object.
         ScanPlugin.Utils.decode(ScanFrameRequest)
           .then((res) => {
             console.log('llllllllllllllllllllllllllllllllllllllll')
             console.log(res)
             console.log('llllllllllllllllllllllllllllllllllllllll')
             setScanResult(res[0])
             setTimeout(()=>{
               setIsLoading(false);
             },3000)
           }) // ScanResponse
     
           .catch((e) => console.log(e))
     }


  }





const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'QR ScanGo App Read Storage Permission',
        message:
          'QR ScanGo App needs read your storage ' +
          'so you can scan 1D and 2D barcodes.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      setIsLoading(true)
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};



const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'QR ScanGo App Camera Permission',
        message:
          'QR ScanGo App needs access to your camera ' +
          'so you can scan 1D and 2D barcodes.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      setIsLoading(true)
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const handlePress = ()=>{
  console.log('hello')
}


  const scanCodeQR = () =>{

    // Ask for camera permissions.
    requestCameraPermission();

    // ActivityIndicator fire
    
    
    //Constructing request object.
    let defaultViewRequest = {
        scanType: ScanPlugin.ScanType.All,
        additionalScanTypes: [],
    }


    //Calling defaultView API with the request object.
    ScanPlugin.Utils.startDefaultView(defaultViewRequest)
      .then((res) => {
        console.log(res)
        setScanResult(res)
        setTimeout(()=>{
          setIsLoading(false);
        },3000)
      }) // ScanResponse

      .catch((e) => console.log(e))

  }



  const copyToClipboard = () => {
    Clipboard.setString(scanResult.originalValue);
    ToastAndroid.show('Copeid!', ToastAndroid.SHORT)
  };





  return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={{padding:20}}>

            <View>
              <View style={{flex:1, alignItems: 'center',}}>
                <Image style={styles.welcomeImage} source={require('../assets/images/qrcode-rbg.png')} />
                <Text style={styles.headerTitle}>Welcom to QR ScanGo</Text>
                <Text style={styles.text} >Scan and parse all major 1D and 2D barcodes</Text>
              </View>
              <View style={{flex:1, alignItems: 'center', margin:10}}>
                <Text>Version: 1.0.1</Text>
              </View>
            </View>  
            <View>
              <TouchableOpacity style={styles.button} onPress={scanCodeQR} activeOpacity={0.7}>
                <FontAwesome name="qrcode" size={30} color="#fff" />
                <Text style={styles.buttonText}>Start scan your QR code</Text>
              </TouchableOpacity>


               <TouchableOpacity style={{...styles.button, backgroundColor: 'rgba(145,63,146, 0.9)', }} onPress={scanSelectedCodeQR} activeOpacity={0.7}>
                <FontAwesome name="upload" size={30} color="#fff" />
                <Text style={styles.buttonText}>Select QR Image</Text>
              </TouchableOpacity>

              {
                isLoading ?
                <ActivityIndicator size="large" color="#0000ff" />:
                <View>
                      
                  {
                    scanResult ?
                    <View style={{...styles.cardContainer}}>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:20, color:'#000', marginVertical:10}} >Scanned Data:</Text>
                        <TouchableOpacity onPress={copyToClipboard}>
                          <FontAwesome name="copy" size={25} color="blue" />
                        </TouchableOpacity>
                      </View>
                      {
                        scanResult.scanTypeForm == 1006 ?
                        <View>
                          <TouchableOpacity onPress={() => Linking.openURL(scanResult.originalValue)}>
                            <Text selectable={true} style={styles.linkText}>{scanResult.originalValue}</Text>
                          </TouchableOpacity>  
                        </View>:
                        <View>
                          {
                            <Text style={{ color: 'darkblue', fontSize: 18 }}>{scanResult.originalValue}</Text>
                          }
                        </View>
                      }
                    </View>
                    :
                    null
                  }
                </View>
              }
              
            </View>

            <HowToUse />
            <QRCodeTypes />

            <View>


            </View>

            <View></View>



              

          </View>
        </ScrollView>
      </SafeAreaView> 
  );
}




const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  welcomeImage:{
    width:200,
    height:150,
    marginBottom:20,
  },
  text:{
    fontSize:15,
  },
  button: {
    backgroundColor: 'rgba(216,66,66, 0.9)',
    paddingVertical: 12,
    marginVertical:5,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },      
  linkText: {
        color: 'blue', // Standard link color
        textDecorationLine: 'underline', // Underline the text
        fontSize: 16,
        fontWeight: 'bold',
      },
  cardContainer: {
    backgroundColor: '#fff', // White background
    borderRadius: 8, // Rounded corners
    marginHorizontal: 0, // Horizontal margin for spacing from screen edges
    marginVertical: 30, // Top margin for spacing between cards
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
});


export default HomeScreen;










