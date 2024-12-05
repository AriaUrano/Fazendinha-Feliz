import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesJardim'; 

export default function Jardim({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Jardim</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/uM0whfa.png' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>Aqui está uma breve descrição do nosso lindo jardim.</Text>

        {/* Botão para ver as espécies */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EspeciesPlantas')}>
          <Text style={styles.buttonText}>Ver nossas espécies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

