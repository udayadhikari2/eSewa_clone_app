import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function Add() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: '#99e978',
      }}>
      <Icon
        containerStyle={{style: {fontWeight: 'bold'}}}
        name="add-outline"
        color="black"
        size={20}
      />
      <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>ADD</Text>
    </TouchableOpacity>
  );
}
