import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesCozinhaCardapio';  

export default function CozinhaCardapio({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Possíveis Cardápios Futuros</Text>

        {/* Seção de Café da Manhã */}
        <View style={styles.cozinhaContainer}>
          <Text style={styles.subtitle}>Café da Manhã (Incluso):</Text>
          <Image 
            source={{ uri: 'https://i.imgur.com/1kPl6uH.png' }} 
            style={styles.image} 
          />
          <Text style={styles.description}>♥ Pão francês com manteiga, café com leite, e frutas frescas da estação.</Text>
          <Text style={styles.description}>♥ Tapioca com queijo coalho e suco natural de laranja.</Text>
          <Text style={styles.description}>♥ Iogurte natural com granola e mel.</Text>
        </View>

        {/* Seção de Almoço e Janta */}
        <View style={styles.cozinhaContainer}>
          <Text style={styles.subtitle}>Almoço e Janta (R$30,00/Crianças menores 8 anos não pagam):</Text>
          <Image 
            source={{ uri: 'https://i.imgur.com/p3XCEAc.png' }} 
            style={styles.image} 
          />
                          <Image 
          source={{ uri: 'https://i.imgur.com/wnYMZ1y.png' }} 
          style={styles.image} 
        />
          <Text style={styles.description}>♥ Feijoada Completa: Feijão preto com carnes suínas, arroz branco, farofa e couve refogada.</Text>
          <Text style={styles.description}>♥ Moqueca de Peixe: Peixe cozido com leite de coco, dendê, pimentão e tomate, acompanhado de arroz e pirão.</Text>
          <Text style={styles.description}>♥ Churrasco Completo: Carnes grelhadas (picanha, linguiça, frango), com farofa, vinagrete e arroz.</Text>
        </View>

        {/* Seção de Sobremesas */}
        <View style={styles.cozinhaContainer}>
          <Text style={styles.subtitle}>Futuras Opções de Sobremesa:</Text>
          <Image 
            source={{ uri: 'https://i.imgur.com/x0Nsbp8.png' }} 
            style={styles.image} 
          />
             <Image 
          source={{ uri: 'https://i.imgur.com/wDpdFSF.png' }} 
          style={styles.image} 
        />
                <Image 
          source={{ uri: 'https://i.imgur.com/arJOK62.png' }} 
          style={styles.image} 
        />
          <Text style={styles.description}>♥ Pudim de Leite Condensado: Clássico pudim de leite com calda de caramelo.</Text>
          <Text style={styles.description}>♥ Brigadeiro Gourmet: Brigadeiros de chocolate com diferentes toppings e sabores.</Text>
          <Text style={styles.description}>♥ Mousse de Maracujá: Mousse de maracujá com uma base cremosa e sabor refrescante.</Text>
        </View>

        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

