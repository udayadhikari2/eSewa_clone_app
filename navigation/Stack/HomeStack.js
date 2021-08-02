import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../screens';

const HomeStackScreen = createStackNavigator();
export default function HomeStack({navigation, route, scrollY, translateY}) {
  if (route.name === 'Home') {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        tabBarVisible: true,
      });
    }, [navigation]);
  }
  return (
    <HomeStackScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <HomeStackScreen.Screen name="Home">
        {props => <Home scrollY={scrollY} translateY={translateY} {...props} />}
      </HomeStackScreen.Screen>
    </HomeStackScreen.Navigator>
  );
}
