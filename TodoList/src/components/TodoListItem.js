import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({todo}) => (
    <TouchableOpacity onPress={ () => {}}>
        <View style={styles.line}>
            <Text style={styles.lineText}>{todo.text}</Text>
        </View>
    </TouchableOpacity>
);   

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
export default TodoListItem;
