import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#e8f5e9', 
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4caf50', 
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500,  
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#388e3c',  
    borderWidth: 2,
  },
  description: {
    fontSize: 18,
    color: '#2c6b2f',  
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4caf50',  
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,  
    marginBottom: 6,
  },
  buttonText: {
    color: '#ffffff',  
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
