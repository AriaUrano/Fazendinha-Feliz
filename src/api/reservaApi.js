import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Substitua com a URL base da MockAPI
const api = axios.create({
  baseURL: 'https://mockapi.io/clone/67366df8aafa2ef222308118', // URL base do seu projeto MockAPI
});

// Função para salvar os dados localmente no Async Storage
const salvarNoStorage = async (chave, dados) => {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(dados));
  } catch (error) {
    console.error("Erro ao salvar dados no Async Storage:", error);
  }
};

// Função para obter os dados localmente do Async Storage
const obterDoStorage = async (chave) => {
  try {
    const dados = await AsyncStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error("Erro ao obter dados do Async Storage:", error);
    return [];
  }
};

// Função para criar uma reserva
export const criarReserva = async (reserva) => {
  try {
    // Tenta criar a reserva na API MockAPI
    const response = await api.post('/reservas', reserva);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar reserva na API, salvando localmente:", error);

    // Se falhar, salva a reserva localmente
    const reservasLocais = await obterDoStorage('reservas');
    const novaReserva = { ...reserva, id: Date.now().toString() }; // Cria um ID único para a reserva local
    const atualizadas = [...reservasLocais, novaReserva];

    await salvarNoStorage('reservas', atualizadas);
    return novaReserva; // Retorna a reserva criada localmente
  }
};

// Função para obter todas as reservas
export const obterReservas = async () => {
  try {
    // Tenta obter as reservas da API MockAPI
    const response = await api.get('/reservas');
    await salvarNoStorage('reservas', response.data); // Atualiza o Async Storage com os dados da API
    return response.data;
  } catch (error) {
    console.error("Erro ao obter reservas da API, recuperando localmente:", error);

    // Se falhar, retorna os dados locais do Async Storage
    return await obterDoStorage('reservas');
  }
};

