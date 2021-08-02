import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = ({HEIGHT}) => (
  <View>
    <Text
      style={{
        position: 'absolute',
        width: '100%',
        height: HEIGHT,
        backgroundColor: '#1e1e1e',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
      }}></Text>
  </View>
);

function HeaderStyle() {
  return <Header HEIGHT={150} />;
}
export default HeaderStyle;
