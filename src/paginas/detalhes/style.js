import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141a28',
        width: '100%',
        height: '100%'
    },
    containerView:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: '20px'
    },
    containerImg:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: -50
    },
    titulo:{
        textAlign: 'center',
        color: '#fff',
        fontSize:25,
        paddingTop:8
    },
    tituloHab: {
        textAlign: 'center',
        color: '#fff',
        fontSize:25,
        paddingTop:8,
        marginBottom: 10
    },
    textNota:{
        fontSize:25,
        color: '#FFCC33',
        paddingLeft:4
    },
    textSinopse:{
        fontSize:20,
        color:'#fff',
        fontWeight:200,
        textAlign:'center',
        marginTop:20
    },
    images:{
        width:'260px',
        height:'380px',
        borderRadius:8
    }
});

export default styles;