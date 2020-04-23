import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from '../components/styles'

export default class SerieDetail extends React.Component {
    render(){
        const {serie} = this.props.route.params;
        return(
            <View>
                <Image source={{uri:serie.img}} aspectRatio={1}/>
                <View style={styles.line}>
                    <Text style={styles.label}>Título</Text>
                    <Text style={styles.content}>{serie.title}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.label}>Gênero</Text>
                    <Text style={styles.content}>{serie.gender}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.label}>Nota</Text>
                    <Text style={styles.content}>{serie.rate}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.label}>Descrição</Text>
                    <Text style={styles.content}>{serie.description}</Text>
                </View>
            </View>
        );
    }
} 

