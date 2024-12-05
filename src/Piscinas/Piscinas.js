import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesPiscinas'; 

export default function Piscinas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Piscinas</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/vBNTm8K.png' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>Possuímos saunas e jacuzzis além de uma piscina grande para relaxamento e natação.</Text>
        <Text style={styles.description}>Há também uma piscina rasa para as crianças se divertirem!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EstruturaPiscinas')}>
          <Text style={styles.buttonText}>Ver nossas estruturas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

