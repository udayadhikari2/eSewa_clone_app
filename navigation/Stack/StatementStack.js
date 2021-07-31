import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Statements} from '../../screens';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const StatementStackScreen = createStackNavigator();
export default function StatementStack({navigation, route}) {
  if (route.name === 'Statements') {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        tabBarVisible: false,
      });
    }, [navigation]);
  }
  return (
    <StatementStackScreen.Navigator>
      <StatementStackScreen.Screen
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
        name="Statement"
        component={Statements}
      />
    </StatementStackScreen.Navigator>
  );
}
