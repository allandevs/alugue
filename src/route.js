import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home  from  './pages/Home'
import Detail from './pages/Detail'

const Stack = createStackNavigator();

function Routes (){
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name="home"
                component= { Home } 
                options={{
                   title: 'Alugue',
                   headerTitleStyle:{
                      fontFamily: 'Arial' 
                   },

                   headerRight: () => (
                    <TouchableOpacity style={{marginRight: 15 }}>
                        <Icon name="shopping-bag"
                         size={20} color="#000" 
                         />
                    </TouchableOpacity>
                   )
                }}
                  />
                <Stack.Screen
                 name="detail"
                 component= { Detail }
                 options={{
                    title: 'Detalhe',
                    headerTitleStyle:{
                       fontFamily: 'Arial' 
                    },
 
                    headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15 }}>
                         <Icon name="shopping-bag"
                          size={20} color="#000" 
                          />
                     </TouchableOpacity>
                    )
                 }}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;