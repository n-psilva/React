import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Config() {
    return (
      <View style={styles.container}>
        <Text>Minhas Configurações</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });