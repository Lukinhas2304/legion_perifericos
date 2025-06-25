import {Text, View, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function Cabecalho(){
    const navigation = useNavigation();

    return(


        <View style={styles.viewHeader}>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>

            <Feather style={{marginLeft: -70}} name='menu' size={36} color='#fff'/>

            </TouchableOpacity>

            <Text style={styles.textHeader}> LegionTEC </Text>

        </View>

    );
}