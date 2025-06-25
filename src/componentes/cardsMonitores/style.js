import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#0f1923',
        padding:35,
        borderRadius:10,
        marginBottom: 40,
        marginRight: 20,
        marginTop: 90,
        width:280,
        height:380,
        zIndex: -1,
    },

    titulo:{
        marginTop: -40,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        width: 280,
        height: 510,
        textAlign: 'left',
        fontSize: 40,
        paddingTop:8,
        marginBottom:20,
        zIndex: 4,
    },
    images:{
        marginTop: -120,
        width: 270,
        height: 430,
        zIndex: 3,
    }
})

export default styles