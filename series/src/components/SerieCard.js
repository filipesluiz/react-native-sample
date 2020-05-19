import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const SerieCard = ({serie, index, onNavigatge}) =>(
    <TouchableOpacity onPress={onNavigatge}
        style={[styles.cardContainer, index % 2 === 1 ? {paddingRight:5}:{paddingLeft:5}]}>
        <View style={styles.card}>
            <View>
                <Image source={{uri:`data:image/jpeg;base64,${serie.img}`}} aspectRatio={1} resizeMode="cover"/>
            </View>
            <View style={styles.cardTitleWrapper}> 
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default SerieCard;