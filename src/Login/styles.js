import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  loginButton: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#ff5252',
    marginTop: 15,
    textAlign: 'center',
  },
});
