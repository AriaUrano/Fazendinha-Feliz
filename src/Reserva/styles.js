import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  selectedDaysText: {
    fontSize: 18,
    color: '#4caf50',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contactContainer: {
    marginVertical: 20,
  },
  paymentMethods: {
    marginVertical: 10,
    padding: 15,  
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  contactMethods: {
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,  
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#388e3c', 
    paddingVertical: 15,  
    paddingHorizontal: 30,  
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4, 
  },
  confirmButtonText: {
    fontSize: 18,  
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
