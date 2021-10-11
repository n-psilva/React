import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


var listaContatos = [
    {
        id: "1",
        nome: "Natan"
    },
    {
        id: "2",
        nome: "Dag"
    },
    {
        id: "3",
        nome: "Joatan"
    }
];


export default function ListaContatos() {

    const renderItem = ({item}) => (
        <Text>{item.nome}</Text>
    );

    const [text, setText] = React.useState("");
    const [refresh, setRefresh] = React.useState(true);


    function adicionarContato(text){
        listaContatos.push({id: "19", nome: text});
        setRefresh(!refresh);
    }


    return (
      <View style={styles.container}>
        <Text>Contatos</Text>

        <TextInput
            style={{
                borderWidth: 1,
                width: 200
            }}
            
            onChangeText={setText}
            value={text}
        />

        <TouchableOpacity
            style={{backgroundColor: "red",
            padding: 20,
            borderRadius: 20,
            margin: 10
          }}
          onPress={() => adicionarContato(text)}
        >
            <Text>Adicionar Contato</Text>
        </TouchableOpacity>

        <FlatList
            style={{
                marginTop:10
            }}
            data={listaContatos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={refresh}
        />


      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });