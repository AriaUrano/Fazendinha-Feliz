import React from 'react';  
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesAquario';  
export default function Aquario({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Aquário</Text>

        <Image 
          source={{ uri: 'https://i.imgur.com/dD6MUem.png' }} 
          style={styles.image} 
        />

        <Text style={styles.description}>
          No nosso aquário, você encontrará uma grande variedade de peixes exóticos.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Especies')}>
          <Text style={styles.buttonText}>Ver nossas espécies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


