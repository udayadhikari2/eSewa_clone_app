import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import {services} from './ServicesItems.js';
import ButtonView from '../Buttons/index';

function AllServices() {
  const [pressed, setPressed] = useState(true);
  return (
    <View style={styles.ServicesContainer}>
      <View
        style={{
          alignItems: 'center',
          padding: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        {!pressed ? (
          <>
            {services.slice(0, 8).map((ServiceValue, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    minWidth: 85,
                    paddingVertical: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    borderColor: 'white',
                  }}>
                  <Icons
                    style={{paddingVertical: 5}}
                    name={ServiceValue.icon}
                    size={25}
                    color="#99e978"
                  />
                  <Text style={{fontSize: 11, color: 'white'}}>
                    {ServiceValue.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </>
        ) : (
          <>
            {services.map((ServiceValue, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    minWidth: 85,
                    paddingVertical: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    borderColor: 'white',
                  }}>
                  <Icons
                    style={{paddingVertical: 5}}
                    name={ServiceValue.icon}
                    size={25}
                    color="#99e978"
                  />
                  <Text style={{fontSize: 11, color: 'white'}}>
                    {ServiceValue.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}

        <ButtonView pressed={pressed} setPressed={setPressed} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ServicesContainer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
  },
});
export default AllServices;
