import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MyQRCode from './MyQRCode';

export default function QRCodeBottom({viewQRcode, setViewQRcode, width}) {
  const myQRCode = () => {
    if (!viewQRcode) {
      setViewQRcode(true);
    } else {
      setViewQRcode(false);
    }
  };
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1000,
        bottom: 0,
        width,
        height: viewQRcode ? (width * 100) / 65 : 150,
        backgroundColor: '#121212',
        borderRadius: 30,
        shadowColor: 'white',
        shadowRadius: 3,
        shadowOpacity: 0.7,
        paddingVertical: 1,
        shadowOffset: {
          height: 3,
          width: 3,
        },
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 30,
          paddingTop: 20,
          borderBottomWidth: 0.2,
          borderColor: 'gray',
        }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              letterSpacing: 0.1,
              borderBottomWidth: 2,
              borderBottomColor: '#99e978',
              paddingBottom: 15,
            }}>
            My QR Code
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            padding: 5,
          }}
          onPress={myQRCode}>
          <Icon
            name={viewQRcode ? 'chevron-down-outline' : 'chevron-up-outline'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <View>
        <MyQRCode width={width} />
      </View>
    </View>
  );
}
