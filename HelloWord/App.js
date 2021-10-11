import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import ListaContatos from './components/ListaContatos';
import Config from './components/Config';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Contatos" component={ListaContatos}/>
        <Stack.Screen name="Configurações" component={Config}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
