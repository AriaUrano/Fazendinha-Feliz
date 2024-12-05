import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesCozinha';  

export default function Cozinha({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Cozinha e Churrasqueira</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/AtD3TnI.png' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>♥ Café da Manhã incluso (das 7 as 9hrs)</Text>
        <Text style={styles.description}>♥ Almoço e Jantar: R$30,00 (crianças abaixo de 8 anos não pagam, das 12 as 14hrs)</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CozinhaCardapio')}>
          <Text style={styles.buttonText}>Ver possiveis cardápios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

