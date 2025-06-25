import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(0, 20, 51)',
      width: '100%',
      height: '100%'
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 15,
      marginLeft: -180,
      marginBottom:'10px',
      fontWeight: 'bold'
    },

    titulo:{
        color: '#fff',
        fontSize:25,
        padding:'20px',
        borderRadius:'15px',
        borderWidth:'3px',
        borderColor:'white',
        backgroundColor: 'white',
        marginBottom:'30px'
    }
});

export default styles;