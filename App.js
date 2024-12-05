import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/Home/Home';
import Casinhas from './src/Casinhas/Casinhas';
import Piscinas from './src/Piscinas/Piscinas';
import EstruturaPiscinas from './src/EstruturaPiscinas/EstruturaPiscinas';
import Cozinha from './src/Cozinha/Cozinha';
import Fazendinha from './src/Fazendinha/Fazendinha';
import Aquario from './src/Aquario/Aquario';
import Jardim from './src/Jardim/Jardim';
import Reserva from './src/Reserva/Reserva';
import Especies from './src/Especies/Especies';
import EspeciesPlantas from './src/EspeciesPlantas/EspeciesPlantas';
import EspeciesFazendinha from './src/EspeciesFazendinha/EspeciesFazendinha';
import EstruturaCasinhas from './src/EstruturaCasinhas/EstruturaCasinhas';
import CozinhaCardapio from './src/CozinhaCardapio/CozinhaCardapio';
import Login from './src/Login/Login';
import AdminPanel from './src/AdminPanel/AdminPanel';
import InformacoesPessoais from './src/InformacoesPessoais/InformacoesPessoais';

const Stack = createStackNavigator();

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Para indicar carregamento inicial

  // Carregar estado do login do AsyncStorage
  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem('isAdminLoggedIn');
        setIsAdminLoggedIn(loggedIn === 'true');
      } catch (error) {
        console.error('Erro ao carregar estado de login:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLoginState();
  }, []);

  // Função para lidar com login
  const handleLogin = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
      await AsyncStorage.setItem('isAdminLoggedIn', 'true');
      setIsAdminLoggedIn(true);
    } else {
      alert('Credenciais incorretas!');
    }
  };

  // Função para lidar com logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
  };

  if (loading) {
    return null; // Ou um componente de carregamento, como um Spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Telas principais */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Casinhas" component={Casinhas} />
        <Stack.Screen name="EstruturaCasinhas" component={EstruturaCasinhas} />
        <Stack.Screen name="Piscinas" component={Piscinas} />
        <Stack.Screen name="EstruturaPiscinas" component={EstruturaPiscinas} />
        <Stack.Screen name="Cozinha" component={Cozinha} />
        <Stack.Screen name="CozinhaCardapio" component={CozinhaCardapio} />
        <Stack.Screen name="Fazendinha" component={Fazendinha} />
        <Stack.Screen name="EspeciesFazendinha" component={EspeciesFazendinha} />
        <Stack.Screen name="Aquario" component={Aquario} />
        <Stack.Screen name="Especies" component={Especies} />
        <Stack.Screen name="Jardim" component={Jardim} />
        <Stack.Screen name="EspeciesPlantas" component={EspeciesPlantas} />
        <Stack.Screen name="Reserva" component={Reserva} />

        {/* Tela de login */}
        <Stack.Screen name="Login">
          {props => <Login {...props} onLogin={handleLogin} />}
        </Stack.Screen>

        {/* Tela de informações pessoais */}
        <Stack.Screen name="InformacoesPessoais" component={InformacoesPessoais} />

        {/* Tela de painel administrativo */}
        {isAdminLoggedIn && (
          <Stack.Screen name="AdminPanel">
            {props => <AdminPanel {...props} onLogout={handleLogout} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
