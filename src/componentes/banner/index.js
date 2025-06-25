import {Image} from "react-native";
import styles from './style.js'

export default function Banner(){

    return(
            <Image style={styles.imageBanner} source={require('../../../assets/LegionBanner.jpg')}/>
    );
    
}