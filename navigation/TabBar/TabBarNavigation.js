import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {tabButtonItems} from './TabButtonItems';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack, StatementStack, PaymentStack, OfferStack} from '../Stack';
const Tab = createBottomTabNavigator();

const QRCode = ({theme, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 55,
          height: 55,
          borderRadius: 70,

          backgroundColor: '#99e978',
        }}>
        <Ionicons
          name="qr-code-outline"
          size={35}
          color={theme ? 'black' : 'white'}
        />
      </View>
    </TouchableOpacity>
  );
};
const TabButton = ({focused, theme, name}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
      }}>
      <Ionicons
        name={focused ? name.activeName : name.inactiveName}
        size={name.size}
        color={name.color}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: `${theme ? 'white' : 'black'}`,
            fontSize: 12,
          }}>
          {name.titleName}
        </Text>
      </View>
    </View>
  );
};

const Tabs = () => {
  const [theme, setTheme] = useState(true);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#121212" />
      <Tab.Navigator
        screenOptions={{
          tabBarVisible: true,
        }}
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 70,
            backgroundColor: `${theme ? '#333332' : 'white'}`,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: props => {
              return (
                <TabButton
                  name={tabButtonItems[0].home}
                  theme={theme}
                  {...props}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Statements"
          options={{
            tabBarIcon: props => {
              return (
                <TabButton
                  name={tabButtonItems[0].statement}
                  theme={theme}
                  {...props}
                />
              );
            },
          }}>
          {props => (
            <StatementStack {...props} options={{tabBarVisible: false}} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="ScanAndPay"
          component={OfferStack}
          options={{
            tabBarButton: props => <QRCode {...props} theme={theme} />,
          }}
        />
        <Tab.Screen
          name="My Payment"
          component={PaymentStack}
          options={{
            tabBarIcon: props => {
              return (
                <TabButton
                  name={tabButtonItems[0].payment}
                  theme={theme}
                  {...props}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Offers"
          component={OfferStack}
          options={{
            tabBarIcon: props => (
              <TabButton
                name={tabButtonItems[0].offers}
                theme={theme}
                {...props}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tabs;
