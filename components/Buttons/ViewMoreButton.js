import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ViewMoreButton() {
  return (
    <TouchableOpacity style={styles.buttonViewMore}>
      <Text style={styles.textViewMore}>View More</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonViewMore: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius: 5,
    elevation:0,
    backgroundColor: '#20391b',
  },
  textViewMore: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: '#99e978',
    fontWeight:"bold"
  },
});
