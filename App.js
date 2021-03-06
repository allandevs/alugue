
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import Routes from './src/route'
export default function App(){
  return ( 
   <>
     <StatusBar style="light" backgroundColor="#000"  translucent={false} />
     <Routes/>
   </>
  );
}