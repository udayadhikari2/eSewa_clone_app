import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function EditView() {
  return (
    // <View>
    <TouchableOpacity style={styles.edit}>
      <Icon name="create-outline" size={20} color="#99e978"></Icon>
    </TouchableOpacity>
    // </View>
  );
}
const styles = StyleSheet.create({
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#20391b',
  },
});
