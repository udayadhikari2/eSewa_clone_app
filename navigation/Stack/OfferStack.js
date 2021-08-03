import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Offers} from '../../screens';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const OfferStackScreen = createStackNavigator();
export default function OfferStack({navigation, route}) {
  if (route.name === 'Offers') {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        tabBarVisible: false,
      });
    }, [navigation]);
  }
  return (
    <OfferStackScreen.Navigator
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
      <OfferStackScreen.Screen
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
        name="Offers"
        component={Offers}
      />
    </OfferStackScreen.Navigator>
  );
}
