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
    <OfferStackScreen.Navigator>
      <OfferStackScreen.Screen
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
        name="Offers"
        component={Offers}
      />
    </OfferStackScreen.Navigator>
  );
}
