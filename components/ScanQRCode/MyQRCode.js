import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function myQRCode({width}) {
  const [myQR, setMyQR] = useState([
    {
      eSewa_id: 312,
      name: 'Uday Adhikari',
      Phone: 9845634343,
    },
  ]);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        width,
        position: 'absolute',
      }}>
      <View style={{padding: 20, backgroundColor: 'white'}}>
        <QRCode //QR code value
          value={myQR}
          size={190}
          color="black"
          backgroundColor="white"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Image
          source={require('../../assets/images/esewaQRCode.png')}
          style={{resizeMode: 'stretch', width: 150, height: 60}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            letterSpacing: 0.5,
          }}>
          Uday Adhikari
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 13,
            letterSpacing: 0.5,
            paddingVertical: 3,
          }}>
          9845634343
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'normal',
            fontSize: 13,
            letterSpacing: 0.5,
            paddingVertical: 15,
          }}>
          Scan QR code to receive money
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 5,
          width: 200,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#99e978',
              borderWidth: 1,
              borderColor: '#99e978',
              borderRadius: 5,
              padding: 5,
            }}>
            Download QR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#99e978',
            borderRadius: 5,
            padding: 5,
          }}>
          <Icon name="share-social-outline" size={20} color="#99e978" />
          <Text style={{color: '#99e978', paddingHorizontal: 5}}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
