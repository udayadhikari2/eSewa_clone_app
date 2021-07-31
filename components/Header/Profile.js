import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

function Profile({navigation}) {
  return (
    <TouchableOpacity>
      <Image
        style={{width: 50, height: 50, borderRadius: 50}}
        source={require('../../assets/images/profile.jpg')}
      />
    </TouchableOpacity>
  );
}

export default Profile;
