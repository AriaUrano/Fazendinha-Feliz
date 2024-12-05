import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesEspecies'; 

export default function Especies({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Espécies de Peixes</Text>

        {/* Exemplo de peixe 1 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://meusanimais.com.br/wp-content/uploads/2021/07/peixe-papagaio-frente-768x576.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}>Peixe-Papagaio</Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Scarus ghobban{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> O peixe-papagaio é conhecido por suas cores vibrantes, que variam de azul a verde e rosa.{"\n"}
            Possui um "bico" para raspar algas de corais e rochas.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Até 90 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água salgada (24-28°C, pH 8.1-8.4).{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Necessita de espaço, ideal para aquários grandes.
          </Text>
        </View>

        {/* Exemplo de peixe 2 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://s3.amazonaws.com/assets.dotlib.com/public/images/peixe-leao-domina-litoral-do-brasil-e-ameaca-ecossistemas-marinhos-em-oito-estados.png' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}>Peixe-Leão</Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Pterois volitans{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> O peixe-leão possui espinhos venenosos e listras em vermelho, marrom e branco.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Até 38 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água salgada (24-28°C, pH 8.1-8.4).{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Predador calmo, evitar contato com peixes menores.
          </Text>
        </View>

         {/* Exemplo de peixe 3 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://inaturalist-open-data.s3.amazonaws.com/photos/251578086/medium.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}>Peixe-borboleta</Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Chaetodon lunula{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> De cores vibrantes, com listras pretas, amarelas e brancas, o peixe-borboleta é altamente reconhecível. {"\n"}
            É um peixe pacífico, mas pode ser territorial em aquários pequenos.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Cresce até 20 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água salgada, com temperatura entre 24-28°C e pH 8.0-8.4.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Requer grandes aquários com espaço suficiente para nadar livremente e vive melhor em pares ou pequenos grupos.
          </Text>
        </View>

                 {/* Exemplo de peixe 4 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4HuQ7oa2ht_tUfw8T3WhSdeZBtBEozSEIw&s' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}> Acará-disco</Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Symphysodon aequifasciatus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Este peixe de água doce tem uma forma redonda, com coloração vibrante que varia do azul ao vermelho, com listras verticais escuras. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode crescer até 20 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água doce, com temperatura entre 26-30°C e pH 5.0-6.5.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> É um peixe calmo, mas sensível a mudanças bruscas de temperatura e qualidade da água. Ideal para aquários comunitários com peixes não agressivos.
          </Text>
        </View>

                         {/* Exemplo de peixe 5 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://guiadoaquarismo.com.br/wp-content/uploads/2024/03/Peixe-palhaco-Amphiprioninae.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}> Peixe-palhaço </Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Amphiprion ocellaris{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Famoso por sua cor laranja brilhante e listras brancas, o peixe-palhaço é um dos peixes mais populares para aquários de recife. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode atingir até 11 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água salgada, com temperatura entre 24-27°C e pH 8.1-8.4.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Muito sociável, forma uma simbiose com anêmonas, onde encontra proteção e abrigo.
          </Text>
        </View>


                                 {/* Exemplo de peixe 6 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://guiadoaquarismo.com.br/wp-content/uploads/2023/06/peixe-mandarim.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}> Peixe-dragão  </Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Synchiropus splendidus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>Com um corpo coberto por padrões psicodélicos de cores verdes, azuis, laranjas e vermelhas, o peixe-dragão é uma das espécies mais fascinantes visualmente. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Até 8 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Água salgada, com temperatura entre 24-28°C e pH 8.1-8.4.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> É um peixe tímido e pacífico que prefere aquários bem estabelecidos com muitas rochas vivas para se esconder.
          </Text>
        </View>

                                         {/* Exemplo de peixe 7 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://www.aquarismopaulista.com/wp-content/uploads/Apteronotus-albifrons4.jpeg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}> Peixe-faca-negro   </Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Apteronotus albifrons{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>Este peixe de água doce é conhecido por seu corpo longo, de cor negra e movimento semelhante ao de uma serpente. Ele utiliza um campo elétrico para se orientar no ambiente. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode atingir até 50 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text>  Água doce, com temperatura entre 23-28°C e pH 6.0-7.5.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> É um peixe noturno e prefere aquários grandes, com esconderijos e plantas flutuantes. Deve ser mantido com peixes pacíficos.
          </Text>
        </View>

                                                 {/* Exemplo de peixe 8 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tjNXfB0SZMKIMeLuML3NsWBJOFJllp4yMA&s' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.fishName}> Peixe-anjo-imperador </Text>
          <Text style={styles.fishDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Pomacanthus imperator{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Este peixe exibe um padrão de listras e círculos azuis e amarelos que se tornam mais pronunciados à medida que amadurece. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode atingir até 40 cm.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text>  Água salgada, com temperatura entre 24-28°C e pH 8.1-8.4.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Embora territorial, pode ser mantido com outros peixes grandes, mas precisa de um aquário espaçoso com muitos esconderijos.
          </Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
