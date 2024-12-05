import React from 'react';  
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { Button } from 'react-native'; // Importação do Button


export default function Home({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://brancocasa.vtexassets.com/arquivos/ids/157864-800-auto?v=638150273647700000&width=800&height=auto&aspect=true' }} 
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/XCVZF9v.jpeg' }} 
            style={styles.banner} 
          />
          <Text style={styles.welcomeText}>
            Bem-vindo à Fazendinha Feliz!
          </Text>
 <Button title="Login Admin" onPress={() => navigation.navigate('Login')} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Casinhas')}>
              <Text style={styles.buttonText}>Casinhas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Piscinas')}>
              <Text style={styles.buttonText}>Piscinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cozinha')}>
              <Text style={styles.buttonText}>Cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fazendinha')}>
              <Text style={styles.buttonText}>Fazendinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Aquario')}>
              <Text style={styles.buttonText}>Aquário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jardim')}>
              <Text style={styles.buttonText}>Jardim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reservaButton} onPress={() => navigation.navigate('Reserva')}>
              <Text style={styles.reservaButtonText}>Fazer Reserva</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé */}
         <View style={styles.footer}>
      <Text style={styles.footerText}>Endereço: Estrada da Fazenda - Cidade Feliz, Brasil</Text>
      <Text style={styles.footerText}>© 2024 Fazendinha Feliz</Text>
      <Text style={styles.footerText}>Desenvolvido por NuGiAri Entertainment</Text>

    </View>

        </View>
      </ScrollView>
    </ImageBackground>
  );
}






