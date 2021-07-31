import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderStyle from '../components/HeaderStyleContainer';

function Statements({navigation, route}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderStyle />
    </ScrollView>
  );
}

export default Statements;
