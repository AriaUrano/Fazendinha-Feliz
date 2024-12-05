import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#e0f7fa',  
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',  
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500, 
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderColor: '#004d40', 
    borderWidth: 2,
  },
  description: {
    fontSize: 18,
    color: '#004d40',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00796b', 
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
