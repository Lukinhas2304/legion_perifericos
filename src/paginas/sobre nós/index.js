import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from './style';


export default function Desenvolvedores(){
  const route = useRoute();
  const navigation = useNavigation();

  return(
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>

        <Feather style={{marginLeft: 30, marginTop: 10}} name='menu' size={36} color='#fff'/>

      </TouchableOpacity>

      <View style={styles.containerView}>

        <Text style={styles.textBanner}> Sobre Nós </Text>
                
        <View style={styles.viewDesenvolvedores}>


          <Text style={styles.textTarsis}>

            Feito por Lucas Coelho e Dérik de 
            
            <br></br>

            Somos do 3º informática para internet da escola Etec de Cidade Tiradentes, e esse app foi instruído a ser feito pelo o Professor Danadoni da matéria DDMII, sendo produzido uma loja de periféricos.

          </Text>

        </View>
        
      </View>

    </ScrollView>
  )
}