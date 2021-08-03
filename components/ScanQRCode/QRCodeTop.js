import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {RNCamera} from 'react-native-camera';

export default function QRCodeTop({
  navigation,
  flash,
  setFlash,
  setTorch,
  width,
}) {
  const tourchEnable = () => {
    if (!flash) {
      setTorch(RNCamera.Constants.FlashMode.torch);
      setFlash(true);
    } else {
      setTorch(RNCamera.Constants.FlashMode.off);
      setFlash(false);
    }
  };
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1000,
        top: 10,
        marginHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width,
        }}>
        <TouchableOpacity
          onPress={tourchEnable}
          style={{
            marginLeft: 15,
            borderRadius: 50,
            backgroundColor: flash ? '#121212' : 'transparent',
            padding: 5,
          }}>
          <Icon
            name={flash ? 'flash-sharp' : 'flash-off-sharp'}
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={{color: 'white', letterSpacing: 0.25}}>
          Scan QR Code to Pay
        </Text>
        <Icon
          name="close-circle"
          size={50}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -10,
        }}>
        <Image
          source={require('../../assets/images/fonePayScan.png')}
          style={{
            resizeMode: 'stretch',
            height: (width * 100) / 600,
            width: width / 1.75,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            width: width / 2,
          }}>
          <Icon name="qr-code-outline" size={23} color="white" />
          <Text style={{color: 'white'}}>Add QR Code from gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
