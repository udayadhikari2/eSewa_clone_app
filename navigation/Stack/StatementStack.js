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
    <StatementStackScreen.Navigator
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
      <StatementStackScreen.Screen
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={25} color="white" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginHorizontal: 20}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="share-social-outline" size={27} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginHorizontal: 20}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="document-outline" size={27} color="white" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        name="Statement"
        component={Statements}
      />
    </StatementStackScreen.Navigator>
  );
}
