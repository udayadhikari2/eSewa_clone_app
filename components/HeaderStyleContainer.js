import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HeaderStyle() {
  return (
    <View>
      <Text
        style={{
          position: 'absolute',
          width: '100%',
          height: 150,
          backgroundColor: '#1e1e1e',
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
        }}></Text>
    </View>
  );
}
export default HeaderStyle;
