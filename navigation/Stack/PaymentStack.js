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
    <PaymentStackScreen.Navigator>
      <PaymentStackScreen.Screen
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={25} color="black" />
              </TouchableOpacity>
            );
          },
        }}
        name="My Payments"
        component={MyPayment}
      />
    </PaymentStackScreen.Navigator>
  );
}
