import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderStyle from '../components/HeaderStyleContainer';

function Offers() {
  return (
    <View style={styles.homeContainer}>
      <Text>Offer</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Offers;
