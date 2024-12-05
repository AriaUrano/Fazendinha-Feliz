import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#4caf50', 
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  animalContainer: {
    marginBottom: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e8f5e9', 
    borderRadius: 12,
  },
  animalImage: {
    width: 220,
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ffffff', 
  },
  animalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc00', 
    marginVertical: 8,
  },
  animalDescription: {
    fontSize: 16,
    textAlign: 'left',
    color: '#00000', 
    lineHeight: 22,
  },
  descriptionTopic: {
    fontWeight: 'bold',
    color: '#ffcc00', 
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#00000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;