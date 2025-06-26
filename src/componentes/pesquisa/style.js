import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSearch: {
    alignItems: 'center',       
    marginVertical: 12,         
  },
  inputSearch: {
    width: '100%',              
    maxWidth: 400,              
    backgroundColor: 'white', 
    borderWidth: 2,
    borderColor: '#333',     
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: 'black',              
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default styles;