import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from './styles';

const SerieCard = ({serie}) =>(
    <View style={styles.cardContainer}>
        <Text style={styles.card}>
            {serie.title}
        </Text>
    </View>
);

export default SerieCard;