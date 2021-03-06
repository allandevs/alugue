import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import { Container } from './styles';
import {useNavigation} from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommend from '../components/Recommend';
export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Icon name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de Praia"
          description=" Casa nova uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => navigation.navigate('detail')}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa Floripa"
          description=" Casa nova uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => {}}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Rancho SP"
          description=" Casa nova uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => {}}
        />
      </ScrollView>

      <View
        style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
        <Text style={[styles.title, {marginTop: 20}]}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <House
          cover={require('../assets/house4.jpg')}
          price="930,00"
          description="Casa show de bola, lugar seguro e monitorado 24horas"
        />
        <House
          cover={require('../assets/house5.jpg')}
          price="1200,29"
          description="Casa show de bola, lugar seguro e monitorado 24horas"
        />
        <House
          cover={require('../assets/house6.jpg')}
          price="878,99"
          description="Casa show de bola, lugar seguro e monitorado 24horas"
        />
      </ScrollView>

      <Text style={[styles.title, {marginTop: 20}]}>Dica do dia</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <Recommend
          cover={require('../assets/house1.jpg')}
          house="Casa Floripa"
          offer="20%"
        />
        <Recommend
          cover={require('../assets/house4.jpg')}
          house="Casa Rio de Janeiro"
          offer="15%"
        />
        <Recommend
          cover={require('../assets/house6.jpg')}
          house="Rancho Praia"
          offer="10%"
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Pacific',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Pacific',
    fontSize: 18,
    color: '#4f4a4a',
  },
});
