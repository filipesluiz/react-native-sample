import React from 'react';
import {Text, ScrollView, View, Image} from 'react-native';

import styles from '../components/styles'

const Row = ({label, value}) => (
    <View style={styles.line}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.content}>{value}</Text>
    </View>
)

export default class SerieDetail extends React.Component {
    render(){
        const {serie} = this.props.route.params;
        return(
            <ScrollView>
                <Image style={styles.detailImg} source={{uri:serie.img}} aspectRatio={1} resizeMode='contain'/>
                <Row label={'Título'} value={serie.title}/>
                <Row label={'Gênero'} value={serie.gender}/>
                <Row label={'Nota'} value={serie.rate}/>
                <Row label={'Descrição'} value={serie.description}/>
            </ScrollView>
        );
    }
} 

