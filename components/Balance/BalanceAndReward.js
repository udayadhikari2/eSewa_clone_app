import React, {useState} from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {balance, reward} from './data';

export const Balance = ({SIZE, COLOR, TEXTCOLOR}) => {
  const [Amount, setAmount] = useState(true);
  const showAmountCheck = () => {
    if (Amount == false) {
      setAmount(true);
    } else {
      setAmount(false);
    }
  };
  return (
    <TouchableHighlight onPress={showAmountCheck}>
      <View style={styles.BalanceCheck}>
        <Icon name="wallet-outline" size={SIZE} color={COLOR} />
        <View style={styles.Balance}>
          <Text style={{color: TEXTCOLOR}}>
            NPR{' '}
            {Amount
              ? balance.map((data, index) => (
                  <Text key={index}>{data.tapAmount}</Text>
                ))
              : balance.map((data, index) => (
                  <Text key={index}>{data.amount}</Text>
                ))}
          </Text>
          <Text style={{color: 'white'}}>Balance</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export const RewardPoints = () => {
  const [Reward, setReward] = useState(true);
  const showRewardCheck = () => {
    if (Reward == false) {
      setReward(true);
    } else {
      setReward(false);
    }
  };
  return (
    <TouchableHighlight onPress={showRewardCheck}>
      <View style={styles.BalanceCheck}>
        <View style={styles.Balance}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'flex-end',
            }}>
            {Reward
              ? reward.map((data, index) => (
                  <Text key={index}>{data.tapAmount}</Text>
                ))
              : reward.map((data, index) => (
                  <Text key={index}>{data.amount}</Text>
                ))}
          </Text>
          <Text style={{color: 'white'}}>Reward Points</Text>
        </View>
        <Icon name="ribbon-outline" size={20} color="#99e978" />
      </View>
    </TouchableHighlight>
  );
};
function BalanceAndReward() {
  return (
    <View style={styles.BalanceContainer}>
      <Balance SIZE={20} COLOR="#99e978" TEXTCOLOR="white" />
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
