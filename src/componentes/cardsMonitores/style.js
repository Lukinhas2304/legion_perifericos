import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: 'black',
        padding:35,
        borderRadius:10,
        marginTop:10,
        marginBottom: 40,
        marginRight: 20,
        width:290,
        height: 470 
    },

    titulo:{
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
        width: 280,
        height: 510,
        textAlign: 'center',
        fontSize: 14,
        zIndex: 4,
    },
    preco:{
        marginTop: 10,
        fontWeight: 'bold',
        color: 'rgb(0, 84, 209)',
        width: 280,
        height: 510,
        textAlign: 'center',
        fontSize: 20,
        zIndex: 4,
    },

    images:{
        width: 200,
        height: 200,
    }
})

export default styles