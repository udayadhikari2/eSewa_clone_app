import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import EditView from './EditView';
import ViewButton from './ViewButton';

export default function ButtonView({pressed, setPressed}) {
  return (
    <View style={styles.buttonContainer}>
      <View />
      <View />
      <ViewButton pressed={pressed} setPressed={setPressed} />
      <EditView />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    // marginTop: 20,
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
