import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,  
    resizeMode: 'cover',  
  },
  container: {
    flexGrow: 1,  
    alignItems: 'center',  
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,  
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',  
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4caf50',  
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',  
    justifyContent: 'center',  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,  
    borderWidth: 1,
    borderColor: '#388e3c',  
  },
  buttonText: {
    color: '#ffffff',  
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',  
    marginLeft: 10,  
  },
  buttonIcon: {
    width: 24,  
    height: 24,  
    tintColor: '#ffffff',  
  },
  // Estilo do botão "Fazer Reserva"
  reservaButton: {
    backgroundColor: '#ff9800',  
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#f57c00',  
  },
  reservaButtonText: {
    color: '#ffffff',  
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  // Estilo do rodapé
  footer: {
    marginTop: 40,
    backgroundColor: '#f1f1f1',
    padding: 15,
    width: '120%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#cccccc',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  footerLinkText: {
    fontSize: 14,
    color: '#006400',
  },
});

export default styles;







