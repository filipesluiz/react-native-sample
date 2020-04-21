import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const SerieCard = ({serie}) =>(
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Image source={{uri:serie.img}} aspectRatio={1} resizeMode="cover"/>
            <View style={styles.cardTitleWrapper}> 
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </View>
);

export default SerieCard;