import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {imageData} from './imagesData.js';
import LinkNow from '../Buttons/LinkNow';
import Icons from 'react-native-vector-icons/dist/Ionicons';

function ImageCarousel() {
  const {width} = Dimensions.get('window');
  const height = (width * 100) / 240;
  
  return (
    <View style={{marginTop: 15}}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal>
        {imageData.map((images, index) => {
          return (
            <Image
              key={index}
              source={{uri: images}}
              style={{
                width: width - 30,
                height: height,
                borderRadius: 15,
                resizeMode: 'stretch',
              }}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          marginVertical: 15,
        }}>
        <Image
          style={{
            width: width - 30,
            height: height + 50,
            borderRadius: 15,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://blog.esewa.com.np/wp-content/uploads/2020/12/Account-link-blog-banner.png',
          }}></Image>
        <LinkNow />
        <View
          style={{
            position: 'absolute',
            paddingHorizontal: 5,
            paddingVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'black',
            opacity: 0.6,
            marginTop: 50,
            marginHorizontal: 5,
            borderRadius: 10,
          }}>
          <Icons
            name="link-outline"
            size={30}
            color="#99e978"
            style={{marginRight: 10}}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Account Link
          </Text>
        </View>
      </View>
    </View>
  );
}
export default ImageCarousel;
