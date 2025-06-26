import { Text, TouchableOpacity, View, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import styles from './style.js';

import Pesquisa from '../pesquisa/index.js';
import teclados from '../../teclados.js';
import mouses from '../../mouses.js';
import fones from '../../fones.js';
import monitores from '../../monitores.js';
import categorias from '../../categoria.js';

import CardFones from '../cardsFones/index.js';
import CardMonitores from '../cardsMonitores/index.js';
import CardMouses from '../cardsMouses/index.js';
import CardTeclados from '../cardsTeclados/index.js';

const LARGURA_TELA = Dimensions.get('window').width;

const mapCategoriaParaDados = {
  Teclados: { data: teclados, card: CardTeclados },
  Mouses: { data: mouses, card: CardMouses },
  Monitores: { data: monitores, card: CardMonitores },
  Fones: { data: fones, card: CardFones },
};

const Categoria = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Teclados');
  const [textoBusca, setTextoBusca] = useState('');

  const lidarCategoriaSelecionada = (categoria) => {
    setCategoriaSelecionada(categoria);
    setTextoBusca('');
  };

  const perifericos = (lista) => {
    return lista.filter(item =>
      item.nome.toLowerCase().includes(textoBusca.toLowerCase())
    );
  };

  const { data, card: CardComponent } = mapCategoriaParaDados[categoriaSelecionada] || {};

  const dadosFiltrados = perifericos(data);

  return (
    <View style={{ width: '100%', paddingHorizontal: 20 }}>
      <View style={styles.categoriasContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.Categoria,
                categoriaSelecionada === item.nome && { backgroundColor: '#0f1923' }
              ]}
              onPress={() => lidarCategoriaSelecionada(item.nome)}
            >
              <Text style={[
                styles.nomeCategoria,
                categoriaSelecionada === item.nome && { color: 'white' }
              ]}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Pesquisa onBuscar={setTextoBusca} />

      {dadosFiltrados.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white', fontSize: 16 }}>
          Periférico não encontrado
        </Text>
      ) : (
        <FlatList
          data={dadosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: LARGURA_TELA * 0.8 }}>
              <CardComponent {...item} />
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
        />
      )}
    </View>
  );
};

export default Categoria;
