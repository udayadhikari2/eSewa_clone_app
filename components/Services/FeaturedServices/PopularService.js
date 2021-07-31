import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import ViewMoreButton from '../../Buttons/ViewMoreButton';

export default function PopularService() {
  const serviceItems = [
    {
      id: 1,
      name: 'Rs 50 maa iPhone 12 Pro',
      logo: require('../../../assets/images/50MaaIphone.png'),
    },
    {
      id: 2,
      name: 'Third Party Insurance',
      logo: require('../../../assets/images/thirdPartyIncurance.png'),
    },
    {
      id: 3,
      name: 'Foodmandu',
      logo: require('../../../assets/images/foodmandu.png'),
    },
    {
      id: 4,
      name: 'MBJCL-IPO',
      logo: require('../../../assets/images/MBJCL.png'),
    },
    {
      id: 5,
      name: 'Civil Aviation Nepal',
      logo: require('../../../assets/images/CivilAviation.png'),
    },
    {
      id: 6,
      name: 'Nepal Rastrya Bank',
      logo: require('../../../assets/images/nepalRastryaBank.jpg'),
    },
    {
      id: 7,
      name: 'Ncell',
      logo: require('../../../assets/images/Ncell.jpg'),
    },
  ];
  return (
    <View style={styles.services}>
      <Text style={styles.serviceTitle}>Popular Services</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}>
        {serviceItems.splice(0, 7).map((items, index) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 90,
                marginHorizontal: 10,
              }}
              key={index}>
              <View
                style={{
                  padding: 8,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'gray',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={items.logo}
                  style={{
                    width: 55,
                    height: 55,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  color: 'white',
                  textAlign: 'center',
                  fontSize:12
                }}>
                {items.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{marginTop: 35, marginHorizontal: '35%'}}>
        <ViewMoreButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  services: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingBottom: 15,
    marginBottom:15,
  },
  serviceTitle: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
    color: 'white',
  },
});
