import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {capitalize} from '../util';

/** usando ` (crase) criamos uma template string, onde todo texto dentro é lido como uma string, inclusive espaço e quebra de linha. 
    E para executar uma expressão javascript, usamos ${}. */
const PeopleListItem = (props) => {
    const {first, last} = props.people.name;
    const navigation = useNavigation();/* Access the Navigation prop from react-navigation in component who is not screen component. 
                                          See: https://reactnavigation.org/docs/use-navigation */
    return (
        <TouchableOpacity onPress={ () => {navigation.navigate('Detail', {people:props.people})}}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: props.people.picture.thumbnail}}/>
                <Text style={styles.lineText}>{`${capitalize(first)} ${capitalize(last)}`}</Text>
            </View>
        </TouchableOpacity>
    );   
}

const styles = StyleSheet.create({
    line: {
        height:60,
        borderBottomWidth:2,
        borderBottomColor: '#bbb',
        alignItems:"center",
        flexDirection:"row"
    },    
    lineText:{
        fontSize:20,
        paddingLeft:15,
        flex:7 //dividi o espaco em coluna, 7 colunas para a linha de texto
    },
    avatar:{
        aspectRatio: 1,
        marginLeft:15,
        borderRadius: 50,
        flex:1 //dividi o espaco em coluna, ficando uma coluna para a imagem
    }
});
export default PeopleListItem;
