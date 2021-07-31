import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BalanceAndReward from './BalanceAndReward';
import BankLoadMoney from './BankLoadMoney';

function Money() {
  return (
    <View style={styles.BalanceAndRewardContainer}>
      <BalanceAndReward />
      <BankLoadMoney />
    </View>
  );
}
const styles = StyleSheet.create({
  BalanceAndRewardContainer: {
    flex:1,
    marginVertical: 10,
  },
});

export default Money;
