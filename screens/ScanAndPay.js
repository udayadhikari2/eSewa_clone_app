'use strict';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {QRCodeTop, QRCodeBottom} from '../components/ScanQRCode';

function ScanAndPay({navigation}) {
  const {width, height} = Dimensions.get('window');
  const onSuccess = e => {
    console.log(e.data);
  };
  const [viewQRcode, setViewQRcode] = useState(false);
  const [flash, setFlash] = useState(false);
  const [torch, setTorch] = useState(RNCamera.Constants.FlashMode.off);
  return (
    <QRCodeScanner
      style={{
        width,
        height,
      }}
      onRead={onSuccess}
      flashMode={torch}
      permissionDialogTitle="Info"
      permissionDialogMessage="Need camera permission"
      fadeIn={true}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      showMarker={true}
      cameraStyle={{
        width,
        height,
      }}
      markerStyle={{
        borderWidth: 2,
        borderRadius: 10,
      }}
      topContent={
        <QRCodeTop
          flash={flash}
          setFlash={setFlash}
          setTorch={setTorch}
          width={width}
          height={height}
          navigation={navigation}
        />
      }
      bottomContent={
        <QRCodeBottom
          viewQRcode={viewQRcode}
          setViewQRcode={setViewQRcode}
          width={width}
          height={height}
        />
      }
    />
  );
}

export default ScanAndPay;
