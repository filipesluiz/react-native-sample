import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

export default function TodoForm (){
    const [taskValue, onChangeTaskValue] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={text => onChangeTaskValue(text)} />
            </View>
            <View style={styles.buttomContainer}>
                <Button onPress={() => console.log('Teste!!!!!')} title="Add" color="#3f91d1"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    inputContainer:{
        flex:2
    },
    input:{
        padding:4,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        borderColor: '#3f91d1',
        borderWidth: 1

    },
    buttomContainer:{
        flex:1,
        marginRight:5,
        borderRadius:5,
        borderWidth:1,
        backgroundColor: '#3f91d1',
        borderColor: '#3f91d1'
    }
});