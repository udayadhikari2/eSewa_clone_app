import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ScanAndPay() {
  return (
    <View style={styles.homeContainer}>
      <Text>SCAN</Text>
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

export default ScanAndPay;
