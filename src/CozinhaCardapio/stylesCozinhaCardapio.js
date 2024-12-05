import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#bf360c', 
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 20,
  },
    cozinhaContainer: {
    marginBottom: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff3e0', 
    borderRadius: 12,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8b4513', 
    marginVertical: 15,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 22,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ffcc00',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
