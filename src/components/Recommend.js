import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Container } from './styles';

export default function Recommend (props)  {
  return (
      <ImageBackground
      source={props.cover}
      style={styles.container}
      blurRadius={2}
      > 
          <Text style={[styles.house, styles.shadow]}>{props.house} </Text>

          <Text style={[styles.description, styles.shadow]}> {props.offer} OFF</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
container:{
    height:130,
    width: 230,
    marginRight:20,
    marginBottom:40,
    opacity:0.8,
    backgroundColor:'#000',
    marginLeft:3,
    padding: 12,
    marginTop: 20,

},

house:{
color:"#fff",
fontWeight:'bold',
fontSize:15
},

description:{
fontSize: 12,
color: '#fff'
},

shadow:{
textShadowOffset: {width:1, height:2},
textShadowRadius:3,
textShadowColor: '#000',
},
})