import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import Profile from './Profile';
function HeaderItems({navigation}) {
  const settingData = [
    {
      items: 'eSewa CashPoint',
      icon: 'cash-outline',
    },
    {
      items: 'eSewa Remit Agents',
      icon: 'navigate-circle-outline',
    },
    {
      items: 'Help',
      icon: 'help-circle-outline',
    },
    {
      items: 'Setting',
      icon: 'settings-outline',
    },
  ];
  const [setting, setSetting] = useState(false);
  const settingPopout = () => {
    setSetting(true);
  };
  const demo = () => {
    setSetting(false);
  };
  return (
    <View style={styles.headerItems}>
      {setting ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={setting}
          style={{
            borderWidth: 50,
          }}>
          <StatusBar />
          {/* <View style={{backgroundColor: 'red'}}> */}
          <Pressable
            onPress={demo}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}>
            <View
              style={{
                position: 'absolute',
                height: 300,
                width: '100%',
                bottom: 0,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: '#3a3a3b',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View style={{marginVertical: 10}}>
                {settingData.map((label, index) => {
                  return (
                    <TouchableOpacity key={index}>
                      <View style={styles.settingContainer}>
                        <Icons name={label.icon} size={27} color="#99e978" />
                        <Text style={styles.settingItems}>{label.items}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Pressable>
          {/* </View> */}
        </Modal>
      ) : null}
      {/*Image contents */}
      <Profile navigation={navigation} />
      {/*Search contents */}
      <View style={styles.headerItemsIcons}>
        <Icons
          name="search-outline"
          color="white"
          size={25}
          style={styles.Icons}
        />
        {/*Notification contents */}
        <Icons
          name="notifications-outline"
          color="white"
          size={25}
          style={styles.Icons}
        />
        {/*ThreeDots contents */}
        <Icons
          name="ellipsis-vertical"
          color="white"
          size={25}
          style={styles.Icons}
          onPress={settingPopout}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerItemsIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icons: {
    marginLeft: 25,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  settingItems: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'normal',
    lineHeight: 20,
    paddingHorizontal: 5,
    marginLeft: 20,
  },
});

export default HeaderItems;
