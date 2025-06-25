import { StyleSheet } from "react-native";
import Categoria from ".";

const styles = StyleSheet.create({
    Categoria: {
        margin: 15,
        marginRight: -5,
        padding: 15,
        backgroundColor: 'white',
        width: 120,
        height: 40,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    nomeCategoria: {
        fontSize: 15,
        color: "black",
    },
    underline: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: '100%',
        marginTop: 5,
    },

    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 30,
        marginTop: 20,
        fontWeight: 'bold',
        height: 10,
    }
});

export default styles;