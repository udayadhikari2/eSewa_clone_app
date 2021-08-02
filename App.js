import React from 'react';
import {Animated} from 'react-native';
import Tabs from './navigation/TabBar/TabBarNavigation';

export default function App() {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [0, -70],
  });
  return <Tabs scrollY={scrollY} translateY={translateY} />;
}
