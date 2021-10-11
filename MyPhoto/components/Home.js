import React from 'react';
import { Button, Text, View } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Button title="Entrar" onPress={() => navigation.navigate("Perfil")}/>
    </View>
  );
}
