import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function LinkNow() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonLink}>
        <Text style={styles.textLink}>Link Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowOffset: {
    //   width: 5,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'black',
  },
  buttonLink: {
    backgroundColor: '#99e978',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textLink: {
    fontWeight: 'bold',
    color: 'black',
  },
});
