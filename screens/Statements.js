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

function Statements({navigation, route}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#101010'}}>
      <Header HEIGHT={50}/>
      <View style={{marginHorizontal: 15, marginBottom: 15}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#121212',
            borderRadius: 10,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Balance SIZE={30} COLOR="#99e978" TEXTCOLOR="white" />
          <TouchableOpacity style={{marginHorizontal: 15}}>
            <Icon name="refresh-circle-outline" size={35} color="#99e978" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Statements;
