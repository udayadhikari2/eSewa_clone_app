import React, {useState} from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

function BalanceAndReward() {
  const [Amount, setAmount] = useState(true);
  const [Reward, setReward] = useState(true);
  const AmountBlock = 'XXXX.XX';
  const AmountValue = '111.78';
  const RewardValue = '128.02';
  const showAmountCheck = () => {
    if (Amount == false) {
      setAmount(true);
    } else {
      setAmount(false);
    }
  };
  const showRewardCheck = () => {
    if (Reward == false) {
      setReward(true);
    } else {
      setReward(false);
    }
  };
  const Balance = () => {
    return (
      <TouchableHighlight onPress={showAmountCheck}>
        <View style={styles.BalanceCheck}>
          <Icon name="wallet-outline" size={20} color="#99e978" />
          <View style={styles.Balance}>
            <Text style={{color: 'white'}}>
              NPR {Amount ? AmountBlock : AmountValue}
            </Text>
            <Text style={{color: 'white'}}>Balance</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const RewardPoints = () => {
    return (
      <TouchableHighlight onPress={showRewardCheck}>
        <View style={styles.BalanceCheck}>
          <View style={styles.Balance}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'flex-end',
              }}>
              {Reward ? AmountBlock : RewardValue}
            </Text>
            <Text style={{color: 'white'}}>Reward Points</Text>
          </View>
          <Icon name="ribbon-outline" size={20} color="#99e978" />
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.BalanceContainer}>
      <Balance />
      <RewardPoints />
    </View>
  );
}
const styles = StyleSheet.create({
  BalanceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  BalanceCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  Balance: {
    marginHorizontal: 10,
  },
});

export default BalanceAndReward;
