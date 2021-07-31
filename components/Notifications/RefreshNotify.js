import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function RefreshNotification() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99e978',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
      }}>
      <Icon name="checkmark-done-circle" color="black" size={25} />
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Refreshed Succesfully
      </Text>
    </View>
  );
}
