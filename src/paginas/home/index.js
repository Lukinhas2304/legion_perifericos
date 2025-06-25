import {View, ScrollView} from 'react-native';
import Banner from "../../componentes/banner/index.js";
import Cabecalho from "../../componentes/cabecalho/index.js";
import Categoria from '../../componentes/categoria/index.js';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
   

    return(
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>

            <View style={styles.containerView}>

                <Cabecalho/>

                <Banner/>

                <Categoria/>

            </View>

        </ScrollView>
    )
}