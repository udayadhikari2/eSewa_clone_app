import React from 'react';
import {View, Modal} from 'react-native';
import RefreshNotification from './RefreshNotify';
export default function RefreshModal() {
  return (
    <Modal transparent={true}>
      <View
        style={{
          flex: 1,
          padding: 5,
          position: 'absolute',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RefreshNotification />
      </View>
    </Modal>
  );
}
