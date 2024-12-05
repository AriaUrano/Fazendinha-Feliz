import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function InformacoesPessoais({ route, navigation }) {
  const { selectedDays } = route.params;

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [acompanhaPessoas, setAcompanhaPessoas] = useState(false);
  const [acompanhantes, setAcompanhantes] = useState([]);
  const [formaPagamento, setFormaPagamento] = useState('');

  const adicionarAcompanhante = () => {
    setAcompanhantes([...acompanhantes, { nome: '', idade: '', parentesco: '', responsavel: '' }]);
  };

  const handleAcompanhanteChange = (index, field, value) => {
    const novosAcompanhantes = [...acompanhantes];
    novosAcompanhantes[index][field] = value;
    setAcompanhantes(novosAcompanhantes);
  };

  const salvarNoStorage = async (reserva) => {
    try {
      const reservasLocais = JSON.parse(await AsyncStorage.getItem('reservas')) || [];
      reservasLocais.push(reserva);
      await AsyncStorage.setItem('reservas', JSON.stringify(reservasLocais));
      Alert.alert('Reserva salva localmente!', 'Sua reserva foi salva no dispositivo.');
    } catch (error) {
      console.error('Erro ao salvar reserva no Async Storage:', error);
      Alert.alert('Erro', 'Não foi possível salvar sua reserva localmente.');
    }
  };

  const confirmarReservaFinal = async () => {
  if (!nomeCompleto || !idade || !sexo || !email || !telefone || !formaPagamento) {
    Alert.alert('Erro', 'Por favor preencha todos os campos obrigatórios.');
    return;
  }

  // Criar a nova reserva com os dados fornecidos
  const novaReserva = {
    nome_cliente: nomeCompleto,
    idade: parseInt(idade),
    sexo: sexo,
    email: email,
    telefone: telefone,
    acompanhantes: acompanhantes.length,
    grau_parentesco: acompanhantes.map((a) => a.parentesco).join(', '),
    nome_responsavel: acompanhantes.filter((a) => parseInt(a.idade) < 18).map((a) => a.responsavel).join(', '),
    forma_pagamento: formaPagamento,
    data_reserva: new Date().toLocaleDateString(),
    dias_selecionados: selectedDays, // Inclui os dias selecionados
  };

  try {
    // Busca as reservas existentes no AsyncStorage
    const reservasExistentes = JSON.parse(await AsyncStorage.getItem('reservas')) || [];

    // Adiciona a nova reserva à lista existente
    reservasExistentes.push(novaReserva);

    // Salva a lista atualizada no AsyncStorage
    await AsyncStorage.setItem('reservas', JSON.stringify(reservasExistentes));

    // Confirmação ao usuário
    Alert.alert('Reserva confirmada!', 'Sua reserva foi salva com sucesso.');
    
    // Navega para a tela Home
    navigation.navigate('Home');
  } catch (error) {
    console.error('Erro ao salvar a reserva:', error);
    Alert.alert('Erro', 'Não foi possível salvar sua reserva.');
  }
};



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Informações Pessoais</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <View>
        <Text style={styles.infoText}>Mais pessoas irão com você?</Text>

        <Button title="Sim" onPress={() => setAcompanhaPessoas(true)} color="#388e3c" />

        {acompanhaPessoas && (
          <>
            {acompanhantes.map((acompanhante, index) => (
              <View key={index}>
                <TextInput
                  style={styles.input}
                  placeholder={`Nome do acompanhante ${index + 1}`}
                  value={acompanhante.nome}
                  onChangeText={(value) => handleAcompanhanteChange(index, 'nome', value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder={`Idade do acompanhante ${index + 1}`}
                  value={acompanhante.idade}
                  onChangeText={(value) => handleAcompanhanteChange(index, 'idade', value)}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder={`Grau de parentesco do acompanhante ${index + 1}`}
                  value={acompanhante.parentesco}
                  onChangeText={(value) => handleAcompanhanteChange(index, 'parentesco', value)}
                />

                {parseInt(acompanhante.idade) < 18 && (
                  <TextInput
                    style={styles.input}
                    placeholder={`Nome do responsável pelo acompanhante ${index + 1}`}
                    value={acompanhante.responsavel}
                    onChangeText={(value) => handleAcompanhanteChange(index, 'responsavel', value)}
                  />
                )}
              </View>
            ))}
            <Button title="Adicionar outro acompanhante" onPress={adicionarAcompanhante} color="#388e3c" />
          </>
        )}
      </View>

      <View>
        <Text style={styles.infoText}>Forma de Pagamento:</Text>
        <TouchableOpacity
          style={[styles.paymentOption, formaPagamento === 'Cartão de Crédito' ? styles.selectedOption : null]}
          onPress={() => setFormaPagamento('Cartão de Crédito')}
        >
          <Icon name="credit-card" size={20} color="#4caf50" />
          <Text style={styles.paymentOptionText}>Cartão de Crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, formaPagamento === 'Cartão de Débito' ? styles.selectedOption : null]}
          onPress={() => setFormaPagamento('Cartão de Débito')}
        >
          <Icon name="credit-card" size={20} color="#4caf50" />
          <Text style={styles.paymentOptionText}>Cartão de Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, formaPagamento === 'Dinheiro' ? styles.selectedOption : null]}
          onPress={() => setFormaPagamento('Dinheiro')}
        >
          <Icon name="money" size={20} color="#4caf50" />
          <Text style={styles.paymentOptionText}>Dinheiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, formaPagamento === 'Boleto' ? styles.selectedOption : null]}
          onPress={() => setFormaPagamento('Boleto')}
        >
          <Icon name="file-text" size={20} color="#4caf50" />
          <Text style={styles.paymentOptionText}>Boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, formaPagamento === 'PIX' ? styles.selectedOption : null]}
          onPress={() => setFormaPagamento('PIX')}
        >
          <Icon name="bitcoin" size={20} color="#4caf50" />
          <Text style={styles.paymentOptionText}>PIX</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Confirmar Reserva" onPress={confirmarReservaFinal} color="#388e3c" />
       
        
      </View>
    </ScrollView>
  );
}





