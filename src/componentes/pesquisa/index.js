import { TextInput, View } from 'react-native';
import styles from './style';

export default function Pesquisa({ onBuscar }) {
    return (
        <View style={styles.containerSearch}>
            <TextInput
                style={styles.inputSearch}
                placeholder="Digite a arma que deseja buscar:"
                onChangeText={onBuscar}
            />
        </View>
    );
}