import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesFazendinha';  

export default function Fazendinha({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Fazendinha</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/YXVSH3j.png' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>Bem-vindo à nossa fazendinha, onde você pode conhecer diversos animais e aprender mais sobre eles!</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EspeciesFazendinha')} 
        >
          <Text style={styles.buttonText}>Ver nossas espécies</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}





