import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyPayment} from '../../screens';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const PaymentStackScreen = createStackNavigator();
export default function PaymentStack({navigation, route}) {
  if (route.name === 'My Payment') {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        tabBarVisible: false,
      });
    }, [navigation]);
  }
  return (
    <PaymentStackScreen.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e1e1e',
          height: 60,
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 16,
          letterSpacing: 0.5,
          fontWeight: 'normal',
        },
      }}>
      <PaymentStackScreen.Screen
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-back-outline" size={25} color="white" />
              </TouchableOpacity>
            );
          },
        }}
        name="My Payments (3)"
        component={MyPayment}
      />
    </PaymentStackScreen.Navigator>
  );
}
