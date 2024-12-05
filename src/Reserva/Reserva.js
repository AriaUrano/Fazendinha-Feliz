import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Reserva() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();  // Hook para navegação

  const handleDayPress = (day) => {
    let newSelectedDays = [...selectedDays];

    if (newSelectedDays.includes(day.dateString)) {
      newSelectedDays = newSelectedDays.filter(selectedDay => selectedDay !== day.dateString);
    } else {
      newSelectedDays.push(day.dateString);
    }

    setSelectedDays(newSelectedDays);

    if (newSelectedDays.length === 4) {
      setMessage('Pacote de 4 dias selecionados');
    } else if (newSelectedDays.length === 7) {
      setMessage('Pacote de 7 dias selecionados');
    } else {
      setMessage('');
    }
  };

  const confirmarReserva = () => {
    if (selectedDays.length !== 4 && selectedDays.length !== 7) {
      Alert.alert("Seleção inválida", "Por favor, selecione 4 ou 7 dias para confirmar o pacote.");
      return;
    }

    // Navega para a nova tela passando os dias selecionados como parâmetro
    navigation.navigate('InformacoesPessoais', { selectedDays });
  };

  const markedDates = selectedDays.reduce((acc, day) => {
    acc[day] = { selected: true, marked: true, dotColor: '#4caf50' };
    return acc;
  }, {});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Reservas</Text>
      
      <Text style={styles.infoText}>
        Temos pacotes de reservas de 4 dias ou de uma semana. Selecione os 4 ou 7 dias corretamente para validar sua reserva no nosso calendário!
      </Text>

      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDayPress}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#f5f5f5',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#4caf50',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#4caf50',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#4caf50',
            arrowColor: '#4caf50',
            monthTextColor: '#4caf50',
            indicatorColor: '#4caf50',
          }}
        />
      </View>

      {message ? <Text style={styles.infoText}>{message}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title="Continuar" onPress={confirmarReserva} color="#388e3c" />
      </View>
    </ScrollView>
  );
}



