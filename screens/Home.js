import React, {useState, useCallback} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import HeaderStyle from '../components/HeaderStyleContainer';
import HeaderItems from '../components/Header/HeaderItems';
import Money from '../components/Balance/index';
import AllServices from '../components/Services/index';
import ImageCarousel from '../components/ImageCarousel/index';
import {PopularService} from '../components/Services/FeaturedServices';
import RefreshModal from '../components/Notifications/RefreshModal';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function Home({scrollY, translateY}) {
  console.log(scrollY, translateY);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshingNotify, setRefreshingNotify] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      setRefreshingNotify(true);
      wait(1000).then(() => {
        setRefreshingNotify(false);
      });
    });
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#121212',
      }}
      onScroll={e => {
        scrollY.setValue(e.nativeEvent.contentOffset.y);
      }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['green']}
        />
      }>
      {refreshingNotify && <RefreshModal />}
      <HeaderStyle />
      <View style={{marginHorizontal: 15, marginBottom: 15}}>
        <HeaderItems />
        <Money />
        <AllServices />
        <ImageCarousel />
        <PopularService />
      </View>
    </ScrollView>
  );
}
export default Home;
