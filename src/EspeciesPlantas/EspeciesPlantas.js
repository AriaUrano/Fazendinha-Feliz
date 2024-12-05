import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesEspeciesPlantas'; 

export default function EspeciesPlantas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Espécies de Plantas</Text>

         {/* Exemplo da planta 1 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://socientifica.com.br/wp-content/uploads/2022/10/Depositphotos_12057489_L-1536x1022.jpg.webp' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Girassol</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Helianthus annuus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> O girassol é famoso por suas grandes flores amarelas que seguem o sol durante o dia.{"\n"}
             As sementes são comestíveis e ricas em nutrientes, tornando-o uma planta útil e decorativa.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode crescer até 3 metros de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere sol pleno e solo bem drenado. É uma planta resistente que se adapta bem a diferentes condições de cultivo.{"\n\n"}
          </Text>
        </View>

                 {/* Exemplo da planta 2 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://orquideasblog.com/wp-content/uploads/2018/03/FLORES-ORQUIDEA-BORBOLETA.png' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Orquídea Borboleta</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Phalaenopsis amabilis{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Conhecida como orquídea-borboleta por suas flores delicadas que se assemelham a asas, suas cores variam do branco ao rosa. {"\n"}
             É uma planta epífita, ou seja, cresce sobre outras plantas, como árvores.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Suas flores podem ter até 10 cm de largura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere sombra parcial e ambientes úmidos, sendo ideal para áreas tropicais.
{"\n\n"}
          </Text>
        </View>

                         {/* Exemplo da planta 3 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://static.revistahaus.com.br/revistahaus/2022/02/21153125/ave-do-paraiso-bigstock-haus-gazetadopovo.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Ave-do-Paraíso</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Strelitzia reginae{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Com flores que lembram o formato de um pássaro em voo, a ave-do-paraíso apresenta cores vibrantes como o laranja e o azul. {"\n"}
            É uma planta ornamental que atrai muita atenção.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode atingir até 1,5 metros de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Gosta de sol pleno e solo bem drenado.
{"\n\n"}
          </Text>
        </View>

                                 {/* Exemplo da planta 4 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://urbanjungle.pt/wp-content/uploads/2021/10/costela-de-adao-folhas-buracos-2-e1709166402514.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Costela-de-Adão</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Monstera deliciosa{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Famosa por suas folhas grandes e recortadas, é uma planta tropical que cresce tanto como trepadeira quanto como planta de solo. {"\n"}
            Sua folhagem é única e exótica.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> As folhas podem atingir até 90 cm de largura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere meia-sombra e ambientes quentes e úmidos.
{"\n\n"}
          </Text>
        </View>

                                         {/* Exemplo da planta 5 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://yogaflordavida.com/wp-content/uploads/2022/06/Flor-de-lotus-2.webp' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Flor-de-Lótus</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Nelumbo nucifera{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Símbolo de pureza e beleza, a flor-de-lótus cresce em ambientes aquáticos e é conhecida por suas flores grandes e delicadas, que variam do branco ao rosa. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> As flores podem ter até 20 cm de diâmetro.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Necessita de água parada ou corrente lenta e sol pleno.
{"\n\n"}
          </Text>
        </View>

                                         {/* Exemplo da planta 6 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://static.wixstatic.com/media/b30a6f_ff5b9d1a523444b28db03b2f53a33235~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/planta%20aerea%20tillandsia.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Tillandsia (Planta do Ar)</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Tillandsia ionantha{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>  Esta planta epífita, que não necessita de solo, absorve água e nutrientes diretamente do ar. {"\n"}
            Ela tem folhas pequenas e pontiagudas que ficam avermelhadas na floração.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Cresce até 12 cm de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere luz indireta e boa circulação de ar.
{"\n\n"}
          </Text>
        </View>

                                                 {/* Exemplo da planta 7 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_997862-MLB49207767563_022022-O.webp' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Cacto Rabo de Macaco</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Hildewintera colademononis{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>  Este cacto pendente possui longos "braços" cobertos por finos pelos brancos, parecendo rabos de macaco.  {"\n"}
            Produz flores vibrantes em tons de rosa e vermelho.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode crescer até 1 metro de comprimento.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Gosta de sol pleno e solo arenoso, típico de cactos.
{"\n\n"}
          </Text>
        </View>

                                                         {/* Exemplo da planta 8 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-_Y7J3zMKrfD98w9f8v7pTkHeg7Cmd7_EdjIuk01h8X6w2jl5XCg8Dx6Va7hcNo9uu8ypevrxUz2zEgQeZ0VgJZwgoZA45CFoVa36e6eQIyjPMzXhld4xbOUDsL69-wQJejS0uyNuSmM/s1600/IMG_8611.JPG' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Pincushion Protea</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Leucospermum{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>  Conhecida por suas flores em formato de bola, que variam de amarelo a laranja e vermelho, é uma planta nativa da África do Sul que atrai polinizadores. {"\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode atingir até 2 metros de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere sol pleno e solos bem drenados.
{"\n\n"}
          </Text>
        </View>

                                                                 {/* Exemplo da planta 9 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://jardimpark.com.br/wp-content/uploads/2021/02/cuidados-com-a-bromelia.jpg' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Bromélia</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Guzmania{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Esta planta tropical é conhecida por suas folhas em forma de roseta e flores coloridas, que podem durar vários meses. {"\n"}
            É uma planta epífita, ideal para ambientes úmidos. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Normalmente, cresce até 60 cm de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere sombra e alta umidade.
{"\n\n"}
          </Text>
        </View>

                                                                         {/* Exemplo da planta 10 */}
        <View style={styles.fishContainer}>
          <Image 
            source={{ uri: 'https://www.datocms-assets.com/47611/1636948440-77494e.jpg?auto=format&fit=max&w=1200' }}  
            style={styles.fishImage} 
          />
          <Text style={styles.plantName}>Arum Lily</Text>
          <Text style={styles.plantDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Zantedeschia spp.{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> om suas flores em forma de trombeta e folhas grandes, o lírio de arum é apreciado por sua beleza e elegância. {"\n"}
            As flores são frequentemente brancas, mas também podem ser amarelas ou rosa. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode crescer até 1 metro de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Prefere solo úmido e luz indireta.
{"\n\n"}
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
