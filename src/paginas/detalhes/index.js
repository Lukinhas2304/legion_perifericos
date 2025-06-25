import { ScrollView, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function DetalhesAgentes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>
                <Image style={styles.images} source={route.params.imagem}/>

                <Text style={styles.titulo}>{route.params.nome}</Text>
                <Text style={styles.titulo}> Preço: {route.params.preco}</Text>

                <Text style={styles.textSinopse}> Sinopse: {route.params.sinopse} </Text>
            </View>
        </ScrollView>
    )
}