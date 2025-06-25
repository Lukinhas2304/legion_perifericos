import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardFones({nome, imagem, sinopse, preco}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Fones', {imagem, nome, preco, sinopse})}>
            <Image style={styles.images} source={imagem} />
            <Text style={styles.titulo}> {nome} </Text>
            <Text style={styles.titulo}> {preco} </Text>
            <Text style={styles.titulo}> {sinopse} </Text>
        </TouchableOpacity>

    )
}