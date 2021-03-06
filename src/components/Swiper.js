import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

import {SwiperFlatList} from 'react-native-swiper-flatlist';

// import { Container } from './styles';

export default function Swiper() {
  return (
    <SwiperFlatList
      style={styles.wrapper}
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination>
      <View style={styles.slide}>
        <Image source={require('../assets/house1.jpg')} style={{height: 400}} />
      </View>

      <View style={styles.slide}>
        <Image source={require('../assets/house2.jpg')} style={{height: 400}} />
      </View>

      <View style={styles.slide}>
        <Image source={require('../assets/house3.jpg')} style={{height: 400}} />
      </View>
    </SwiperFlatList>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
