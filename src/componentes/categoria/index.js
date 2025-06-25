import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';
import styles from './style.js';
import categorias from '../../categoria.js';
import CardFones from '../cardsFones/index.js';
import CardMonitores from '../cardsMonitores/index.js';
import CardMousePads from '../cardsMousePads/index.js';
import CardMouses from '.././cardsMousePads/index.js';
import CardTeclados from '../cardsTeclados/index.js';
import fones from '../../fones.js';
import monitores from '../../monitores.js';
import mousepads from '../../mousepads.js';
import mouses from '../../mouses.js';
import teclados from '../../teclados.js';

const Categoria = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Teclados');

    const lidarCategoriaSelecionada = (categoria) => {
        setCategoriaSelecionada(categoria);
    }

    return (
        <View style={{ width: '90%' }}>

            <FlatList

                showsHorizontalScrollIndicator={false}

                horizontal = {true}

                data = {categorias}

                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <TouchableOpacity style={[styles.Categoria, categoriaSelecionada === item.nome && {
                        backgroundColor: '#0f1923',
                    }]} onPress={() => lidarCategoriaSelecionada(item.nome)}>
                        <Text style={[styles.nomeCategoria, categoriaSelecionada === item.nome && {
                            color: 'white'
                        }]}>{item.nome}</Text>
                    </TouchableOpacity>
                        
                )}

            />

            {categoriaSelecionada === 'Teclados' && (

                <View style={{width:"100%"}}>
                    
                    <Text style={styles.titulo}>Teclados</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {teclados}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardTeclados imagem = {item.imagem} nome = {item.nome} preco = {item.preco} sinopse = {item.sinopse} />
                        
                        )}

                    />
                    
                </View>
            )}

            {categoriaSelecionada === 'Mouses' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Mouses</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {mouses}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardMouses imagem = {item.imagem} nome = {item.nome} preco = {item.preco} sinopse = {item.sinopse} />
                        
                        )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'MousePads' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>MousePads</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {mousepads}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardMousePads imagem = {item.imagem} nome = {item.nome} preco = {item.preco} sinopse = {item.sinopse} />
                        
                        )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Monitores' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Monitores</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {monitores}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardMonitores imagem = {item.imagem} nome = {item.nome} preco = {item.preco} sinopse = {item.sinopse} />
                        
                        )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Fones' && (
                <View style={{width:"100%"}}>

                    <Text style={styles.titulo}>Fones</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {fones}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardFones imagem = {item.imagem} nome = {item.nome} preco = {item.preco} sinopse = {item.sinopse} />
                        
                        )}

                    />

                </View>
            )}

        </View>
    )
}

export default Categoria;