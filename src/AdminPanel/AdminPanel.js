import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './AdminPanelstyles';

export default function AdminPanel({ navigation }) {
  const [reservas, setReservas] = useState([]);

  // Função para buscar as reservas do AsyncStorage
  const fetchReservas = async () => {
    try {
      const storedReservas = await AsyncStorage.getItem('reservas');
      if (storedReservas) {
        setReservas(JSON.parse(storedReservas));
      } else {
        setReservas([]);
      }
    } catch (error) {
      console.error('Erro ao buscar reservas:', error);
      Alert.alert("Erro", "Houve um problema ao buscar as reservas.");
    }
  };

  // Função para logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isAdminLoggedIn');
      Alert.alert("Logout bem-sucedido!", "Você foi desconectado.");
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      Alert.alert("Erro", "Não foi possível fazer logout.");
    }
  };

  // Função para determinar a duração do pacote
  const getPackageDuration = (pacote) => {
  if (pacote === '4') {
    return '4 dias';
  } else if (pacote === '7') {
    return '7 dias';
  } else {
    return 'Pacote inválido';  // Alterado para mensagem ao invés de erro
  }
};

  // Função para apagar os dados do AsyncStorage
  const handleClearStorage = async () => {
    try {
      await AsyncStorage.removeItem('reservas'); // Remove as reservas
      setReservas([]); // Atualiza o estado
      Alert.alert('Sucesso', 'Todos os dados foram apagados.');
    } catch (error) {
      console.error('Erro ao apagar os dados:', error);
      Alert.alert("Erro", "Não foi possível apagar os dados.");
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.header}>Painel de Admin</Text>

      {reservas.length === 0 ? (
        <Text style={styles.noDataText}>Nenhuma reserva encontrada.</Text>
      ) : (
        reservas.map((reserva, index) => {
          try {
            return (
              <View key={index} style={styles.reservaCard}>
                <Text>Data da Reserva: {reserva.data_reserva}</Text>
                <Text>Pacote Selecionado: {getPackageDuration(reserva.pacote)}</Text>
                <Text>Nome do Cliente: {reserva.nome_cliente}</Text>
                <Text>Idade: {reserva.idade}</Text>
                <Text>Sexo: {reserva.sexo}</Text>
                <Text>Email: {reserva.email}</Text>
                <Text>Telefone: {reserva.telefone}</Text>
                <Text>Acompanhantes: {reserva.acompanhantes}</Text>
                <Text>Forma de Pagamento: {reserva.forma_pagamento}</Text>
              </View>
            );
          } catch (error) {
            console.error('Erro ao processar reserva:', error);
            return (
              <View key={index} style={styles.reservaCard}>
                <Text style={{ color: 'red' }}>
                  Erro ao exibir esta reserva: {error.message}
                </Text>
              </View>
            );
          }
        })
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Botão para apagar os dados */}
      <TouchableOpacity style={styles.clearButton} onPress={handleClearStorage}>
        <Text style={styles.clearButtonText}>Apagar Dados</Text>
      </TouchableOpacity>

          </ScrollView>
  );
}





