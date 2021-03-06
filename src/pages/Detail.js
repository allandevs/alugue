import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

// import { Container } from './styles';

import Swiper from '../components/Swiper';
export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <Swiper />
      </View>

      <View style={styles.headerContent}>
        <View style={{width: '65%'}}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>

        <View style={{width: '35%'}}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Icon
                  name="star"
                  size={20}
                  color="#000"
                  style={styles.myStarstyle}
                />
              }
              emptyStar={
                <Icon
                  name="star-outline"
                  size={20}
                  color="#000"
                  style={styles.myStarstyle}
                />
              }
              halfStar={
                <Icon
                  name="star-half"
                  size={20}
                  color="#000"
                  style={styles.myStarstyle}
                />
              }
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.200,20</Text>
      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24horas
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15, marginTop: 35}}>
        <View style={styles.slide}>
          <Image
            style={{width: 90, height: 90, borderRadius: 10}}
            source={require('../assets/house5.jpg')}
          />
        </View>

        <View style={styles.slide}>
          <Image
            style={{width: 90, height: 90,borderRadius: 10}}
            source={require('../assets/house6.jpg')}
          />
        </View>

        <View style={styles.slide}>
          <Image
            style={{width: 90, height: 90, borderRadius: 10}}
            source={require('../assets/house2.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house: {
    fontSize: 18,
    color: '#4f4a4a',
  },
  rating: {
    fontSize: 11,
    color: '#4f4a4a',
  },
  myStarstyle: {
    color: '#e7a74e',
    backgroundColor: 'transparent',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#000',
  },
  price: {
    paddingHorizontal: 20,
    fontWeight: '700',
    color: '#000',
  },
  description: {
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 90,
    borderRadius: 10,
    marginRight: 20,
  },
});
