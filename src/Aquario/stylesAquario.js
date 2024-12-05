import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  
    backgroundColor: '#003366',  
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',  
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500,  
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#004d40',  
    borderWidth: 2,
  },
  description: {
    fontSize: 18,
    color: '#fff',  
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffcc00',  
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 6

  },
  buttonText: {
    color: '#00000',  
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
