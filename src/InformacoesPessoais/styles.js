import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#388e3c',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#2d4150',
    textAlign: 'center',
  },
  
  paymentMethods: {
    marginBottom: 15,
  },
  
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    
   // Adiciona sombra para dar destaque ao botão
   shadowColor: "#000",
   shadowOffset: {
     width:0 ,
     height:2 ,
   },
   shadowOpacity:.25 ,
   shadowRadius :3.84 ,
   elevation :5 ,
},
  
selectedOption :{
backgroundColor:'#dcedc8',//Cor verde clara indica seleção
  
},
paymentOptiontext:{
fontSize :16 ,
marginLeft :10 ,
color :"#2d4150",
},
buttonContainer:{
marginTop :20 ,
alignItems:"center",
},
});