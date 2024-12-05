import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesEstruturaPiscinas';  

export default function EstruturaPiscinas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Estrutura das Piscinas</Text>

        {/* Piscina Adulto */}
        <View style={styles.structureContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/O9KFUbO.png' }} 
            style={styles.image} 
          />
          <Text style={styles.structureTitle}>Piscina Adulto</Text>
          <Text style={styles.description}>
            Uma piscina de 25 metros, ideal para relaxamento e natação. A profundidade vai de 1,2m até 1,8m, perfeita para adultos aproveitarem o sol e exercícios na água.
          </Text>
        </View>

        {/* Piscina Infantil */}
        <View style={styles.structureContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/7wFBx6L.png' }} 
            style={styles.image} 
          />
          <Text style={styles.structureTitle}>Piscina Infantil</Text>
          <Text style={styles.description}>
            Uma piscina rasa, com 50cm de profundidade, segura para crianças e com ampla área para diversão. Os pequenos podem brincar enquanto os pais relaxam.
          </Text>
        </View>

        {/* Sauna */}
        <View style={styles.structureContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/T5hs287.png' }} 
            style={styles.image} 
          />
          <Text style={styles.structureTitle}>Sauna</Text>
          <Text style={styles.description}>
            Sauna seca para relaxamento profundo. Ideal para desintoxicação, alívio do estresse e promoção de bem-estar. Capacidade para até 6 pessoas.
          </Text>
        </View>

        {/* Jacuzzi */}
        <View style={styles.structureContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/YoPNgUA.png' }} 
            style={styles.image} 
          />
          <Text style={styles.structureTitle}>Jacuzzi</Text>
          <Text style={styles.description}>
            Jacuzzi aquecida com hidromassagem, perfeita para relaxar após um dia ativo. Espaço para 4 pessoas, com vista para o jardim.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
