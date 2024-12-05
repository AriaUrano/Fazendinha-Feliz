
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  
    backgroundColor: '#fff8e2', 
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6d4c41',  
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500,  
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#8d6e63',  
    borderWidth: 2,
  },
  description: {
    fontSize: 18,
    color: '#3e2723',  
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6d4c41',  
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 6,
    elevation: 2,  
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
