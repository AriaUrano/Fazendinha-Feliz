import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesEstruturasCasinhas'; 

export default function EstruturaCasinhas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Estrutura das Casinhas</Text>

        {/* Quarto de Casal */}
        <View style={styles.roomContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/PxNZ0oy.png' }}  
            style={styles.image}
          />
                    <Image 
            source={{ uri: 'https://i.imgur.com/ThqAqHs.png' }}  
            style={styles.image}
          />
          <Text style={styles.roomTitle}>Quarto de Casal</Text>
          <Text style={styles.description}>
            Quarto espaçoso com cama de casal, ideal para casais que buscam conforto e privacidade. 
            O ambiente é aconchegante, com móveis rústicos e uma decoração que traz o charme da fazenda.
          </Text>
          <Text style={styles.price}>Preço: R$ 250,00 por noite</Text>
        </View>

        {/* Quarto de Solteiro */}
        <View style={styles.roomContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/R1wNkGW.png' }}  
            style={styles.image}
          />
          <Text style={styles.roomTitle}>Quarto de Solteiro</Text>
          <Text style={styles.description}>
            Quarto confortável com uma cama de solteiro, perfeito para quem viaja sozinho ou grupos que preferem quartos separados.
          </Text>
          <Text style={styles.price}>Preço: R$ 150,00 por noite</Text>
        </View>

        {/* Quarto com 2 Camas de Solteiro */}
        <View style={styles.roomContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/0bQUzWJ.png' }}  
            style={styles.image}
          />
          <Text style={styles.roomTitle}>Quarto com 2 Camas de Solteiro</Text>
          <Text style={styles.description}>
            Este quarto possui duas camas de solteiro separadas, ideal para amigos ou familiares que desejam dividir o espaço com conforto.
          </Text>
          <Text style={styles.price}>Preço: R$ 200,00 por noite</Text>
        </View>

        {/* Quarto com 4 Camas de Solteiro */}
        <View style={styles.roomContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/dGQ3M05.png' }}  
            style={styles.image}
          />
          <Text style={styles.roomTitle}>Quarto com 4 Camas de Solteiro</Text>
          <Text style={styles.description}>
            Amplo quarto com 4 camas de solteiro separadas, ideal para grupos maiores ou famílias que viajam juntas.
          </Text>
          <Text style={styles.price}>Preço: R$ 350,00 por noite</Text>
        </View>

        {/* Banheiro */}
        <View style={styles.roomContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/UnAWNlR.png' }}  
            style={styles.image}
          />
                    <Image 
            source={{ uri: 'https://i.imgur.com/PS2cNBI.png' }}  
            style={styles.image}
          />
          <Text style={styles.roomTitle}>Banheiros Modernos</Text>
          <Text style={styles.description}>
            Nossos banheiros são equipados com chuveiros quentes, pias de mármore e decoração que mistura modernidade e o toque rústico da fazenda.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
