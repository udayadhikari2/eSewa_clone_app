import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Balance} from '../components/Balance/BalanceAndReward';
import {Header} from '../components/HeaderStyleContainer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

function Offers({navigation, route}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#101010'}}>
      <Header HEIGHT={50} />
    </ScrollView>
  );
}

export default Offers;
