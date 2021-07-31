import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function ViewButton({pressed, setPressed}) {
  //   const [pressed, setPressed] = useState(true);
  const viewStyle = () => {
    if (pressed == true) {
      //show less is clicked
      setPressed(false);
    } else {
      //show more is clicked
      setPressed(true);
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={viewStyle}>
      <Text style={styles.text}>
        {pressed ? (
          <>
            <Text>View Less</Text>
            <Icon name="chevron-up-outline" size={18} />
          </>
        ) : (
          <>
            <Text>View More</Text>
            <Icon name="chevron-down-outline" size={18} />
          </>
        )}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#20391b',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#99e978',
  },
});
