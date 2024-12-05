import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './stylesEspeciesFazendinha'; 

export default function EspeciesFazendinha({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Espécies da Fazendinha</Text>


                 {/* Exemplo de animal 1 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://zebu.com.br/wp-content/uploads/2022/05/unnamed.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://static.wixstatic.com/media/becbeb_9121874d3b7d4bcb949b56d841f98a1f~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/becbeb_9121874d3b7d4bcb949b56d841f98a1f~mv2.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://nzsheep.co.nz/site/wp-content/uploads/2022/06/facebook_1655247100740_6942609535624688617.jpg' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Ovelha</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Ovis aries{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Ovelhas são mamíferos ruminantes, conhecidas por sua lã macia e carne. {"\n"}
            Elas têm um temperamento geralmente dócil e vivem em rebanhos. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Variam de 60 a 90 cm de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Preferem pastagens e áreas abertas.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> São animais sociais e formam laços fortes com outros membros do rebanho.{"\n\n"}
            <Text style={styles.descriptionTopic}>Raças:</Text> Dorper, Merino e Awassi.{"\n\n"}

          </Text>
        </View>

                       {/* Exemplo de animal 2 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://avespt.com/wp-content/uploads/listing-uploads/gallery/2022/08/galinha-sedosa.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_963412-MLB47130458677_082021-O.webp' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aCfjEZDJH446-D83MVyx_Bq68lybtP48AA&s' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Galinha</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Gallus gallus domesticus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>  As galinhas são aves domésticas conhecidas por sua capacidade de botar ovos e sua carne saborosa. Possuem plumagem variada, que pode incluir cores como branco, marrom e preto.{"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Cerca de 50 cm de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Preferem ambientes com espaço para ciscar e se movimentar livremente.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Sociáveis e podem ser treinadas para reconhecer seus cuidadores.{"\n\n"}
            <Text style={styles.descriptionTopic}>Raças:</Text> Sedosa, Polonesa e Ayam Cemani {"\n\n"}

          </Text>
        </View>

                               {/* Exemplo de animal 3 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://lh4.googleusercontent.com/proxy/VvVdpUPIIpR3EtU08azZIUnvVazEPRBGsDZ45vKxN9k0UbWRZTQC0kRgJFuonhWC_oT-M9NmZvvkpk7ew1AK5TgnbwYbljLSI7EolBlITmeMQA' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/23/ter-uma-mini-cabra-1-1iuy8zza6fko2.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://www.farmin.com.br/wp-content/uploads/2015/12/Raca-Anglo-Nubiana.png' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Cabra</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Capra aegagrus hircus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> As cabras são versáteis e podem ser criadas para leite, carne ou lã. Possuem chifres e são conhecidas por sua curiosidade e comportamento brincalhão. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Entre 60 e 90 cm de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Preferem áreas montanhosas e arbustivas.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Inteligentes e sociáveis, podem ser treinadas para realizar truques.{"\n\n"}
            <Text style={styles.descriptionTopic}>Raças:</Text> Boer, Pigmeu e Anglo-Nubiana {"\n\n"}

          </Text>
        </View>

        
                               {/* Exemplo de animal 4 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Canvasaback_%28Aythya_valisineria%29_RWD3.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/1200px-Anas_platyrhynchos_male_female_quadrat.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://www.passaro.org/wp-content/uploads/2023/01/pardilheira-5.jpg' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Pato</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Anas platyrhynchos domesticus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text>  Patos são aves aquáticas que se destacam por seu corpo arredondado e penas impermeáveis. São conhecidos por seus quack e aparência charmosa. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Cerca de 60 cm de comprimento.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Preferem áreas secas e quentes com espaço para se esconder.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Sociáveis e podem ser vistos em grupo; são bons nadadores.{"\n\n"}
            <Text style={styles.descriptionTopic}>Raças:</Text> Aythya valisineria, Pato-real e Pardilheira.  {"\n\n"}

          </Text>
        </View>

                                       {/* Exemplo de animal 5 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://blog4.mfrural.com.br/wp-content/uploads/2022/03/shutterstock_1175616652.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://media.istockphoto.com/id/1201041782/pt/foto/alpaca.jpg?s=612x612&w=0&k=20&c=3fLhWSwEfod7VpOp2lA4Vs1ts_Y3BnWuNalWG2IAehg=' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/416/69-lhama.png?ims=600x600' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Lhama</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Lama glama{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> A lhama é um mamífero herbívoro da família dos camelídeos, conhecida por sua pelagem espessa e macia, que varia em cor. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode medir de 1,70 a 1,80 metros de altura e pesar entre 130 e 200 kg.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Preferem climas frios e secos, sendo comuns em regiões montanhosas da América do Sul.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Animais sociais que vivem em grupos; são dóceis e frequentemente usados como animais de carga.{"\n\n"}

          </Text>
        </View>

                                               {/* Exemplo de animal 6 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://ipe.org.br/images/2017/07/FOTO-MICO.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://s2-g1.glbimg.com/ij2GLpD1boVHZjwupEY2EGuTNCI=/0x0:1069x814/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/O/u/JCdEnTR5mzhQjhq8utWQ/mico-leao-dourado.png' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://i0.wp.com/oeco.org.br/wp-content/uploads/oeco-migration//images/stories/ago2011/Mico-leao-de-cara-dourada-(Foto-Alcides-Pissinatti).jpg?fit=640%2C401&ssl=1' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Mico-Leão-Dourado</Text>
          <Text style={styles.animalDescription}>
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Leontopithecus rosalia{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Pequeno primata com pelagem dourada e comportamento brincalhão. São conhecidos por sua agilidade. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pesam entre 500 g e 800 g e medem cerca de 30 cm de comprimento.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Endêmicos das florestas tropicais do Brasil, especialmente na Mata Atlântica.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text> Altamente sociais, vivem em grupos familiares e têm uma dieta variada que inclui frutas e insetos.{"\n\n"}
            <Text style={styles.descriptionTopic}>Raças:</Text> Mico-leão-preto, Mico-Leão-Dourado e Mico-leão-de-cara-dourada.  {"\n\n"}

          </Text>
        </View>
        

                                                       {/* Exemplo de animal 7 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://img.odcdn.com.br/wp-content/uploads/2022/02/orangotangos-capa.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/280px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://www.infoescola.com/wp-content/uploads/2018/02/orangotango-735652969.jpg' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Orangotango </Text>
          <Text style={styles.animalDescription}> 
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Pongo pygmaeus{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> Primata conhecido por sua pelagem avermelhada e inteligência. Possuem braços longos e corpo robusto. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Os machos podem pesar entre 50 e 100 kg e medir até 1,5 metros de altura.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Habitantes das florestas tropicais da Indonésia e Malásia.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text>  São animais arborícolas, passam a maior parte do tempo nas árvores e são solitários ou vivem em pequenas famílias.{"\n\n"}

          </Text>
        </View>

                                                               {/* Exemplo de animal 8 */}
        <View style={styles.animalContainer}>
          <Image 
            source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5I1DHkgS1-BYhh9-GBUV6dhPRU9SCzb-CTKXRrmwOjME7lHhX' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://www.infoescola.com/wp-content/uploads/2008/06/anta_584157976.jpg' }}  
            style={styles.animalImage} 
          />
                    <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYkahuViLS_iNiot4uz9ITy-L8X_CKJ7WWw&s' }}  
            style={styles.animalImage} 
          />
          <Text style={styles.animalName}>Anta </Text>
          <Text style={styles.animalDescription}> 
            <Text style={styles.descriptionTopic}>Nome científico:</Text> Tapirus terrestris{"\n\n"}
            <Text style={styles.descriptionTopic}>Especificações:</Text> A anta é um grande mamífero herbívoro com um corpo robusto e focinho curto e flexível. Possui pele espessa e cabelos curtos. {"\n\n"}
            <Text style={styles.descriptionTopic}>Tamanho:</Text> Pode pesar entre 200 e 300 kg e medir até 2 metros de comprimento.{"\n\n"}
            <Text style={styles.descriptionTopic}>Ambiente:</Text> Encontradas em florestas tropicais e áreas pantanosas na América do Sul.{"\n\n"}
            <Text style={styles.descriptionTopic}>Comportamento:</Text>  Solitárias e geralmente noturnas; são excelentes nadadoras e utilizam os rios como caminhos.{"\n\n"}

          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
