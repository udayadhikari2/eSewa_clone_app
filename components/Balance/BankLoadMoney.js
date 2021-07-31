import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

function BankLoadMoney() {
  const Wallet = [
    {
      icon: 'download-outline',
      name: 'Load Money',
    },
    {
      icon: 'push-outline',
      name: 'Send Money',
    },
    {
      icon: 'business-outline',
      name: 'Bank Transfer',
    },
    {
      icon: 'reload-circle-outline',
      name: 'Remittance',
    },
  ];
  return (
    <View style={styles.itemsContainer}>
      {Wallet.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',
              marginHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 5,
            }}>
            <Icon
              style={{paddingVertical: 5}}
              name={item.icon}
              size={25}
              color="#99e978"
            />
            <Text style={{fontSize: 11, color: 'white'}}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default BankLoadMoney;
