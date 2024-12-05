import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#003366',
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
    color: '#ffcc00', 
  },
  fishContainer: {
    marginBottom: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#004080', 
    borderRadius: 12,
  },
  fishImage: {
    width: 220,
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ffffff', 
  },
  fishName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc00', 
    marginVertical: 8,
  },
  fishDescription: {
    fontSize: 16,
    textAlign: 'left',
    color: '#e6e6e6', 
    lineHeight: 22,
  },
  descriptionTopic: {
    fontWeight: 'bold',
    color: '#ffcc00', 
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffcc00',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
