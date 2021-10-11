import React from 'react';
import { TouchableOpacity, Button, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text>Hello!</Text>

        <Button title="Lista de Contatos" onPress={() =>
        navigation.navigate("Contatos")}/>

        <TouchableOpacity style={{
          backgroundColor: "gray",
          padding: 20,
          borderRadius: 20,
          marginTop:10
        }}
        onPress={() => navigation.navigate("Contatos")}>
          <Text>Lista de Contatos</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 20,
          margin: 10
        }}
        onPress={() => navigation.navigate("Configurações")}>
          <Text>Configurações</Text>
        </TouchableOpacity>
    </View>
  );
}