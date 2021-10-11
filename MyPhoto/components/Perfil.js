import React from 'react';
import { Image, Text, View } from 'react-native';



export default function Perfil() {
    return (
      <View style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <Image style={{ width:200, height:200 }}
               source={require('../assets/eu.png')}/>
        <Text>Jonatan Pereira</Text>
        <Text>8° período</Text>
        <Text>UnilasalleRJ</Text>
      </View>
    );
  }