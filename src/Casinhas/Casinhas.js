import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesCasinhas';  

export default function Casinhas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Casinhas</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/hBzFoCS.png' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>Chalés relaxantes para descansar após um dia cheio de atividades na nossa fazendinha!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EstruturaCasinhas')}>
          <Text style={styles.buttonText}>Ver nossas estruturas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
