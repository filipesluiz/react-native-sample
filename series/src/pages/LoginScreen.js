import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../components/firebase';

function createUser(login, password, setLoading, setMessage){
    Alert.alert('Criar nova conta', `Deseja realmente criar uma conta com o e-mail: ${login} ?`,//Using template strings
    [
        {text:'Não', onPress: () => console.log('User dont want create account!')},
        {text:'Sim',
            onPress: () => {
                setLoading(true);
                firebase.auth().createUserWithEmailAndPassword(login, password)
                .then(user => {
                    setMessage("Usuário criado com sucesso!");
                }).catch(error => {
                    setMessage(error.message);
                }).then(user => {
                    setLoading(false);
                });
            }
        }
    ],
    {cancelable: false})
}

function logUser(login, password, setLoading, setMessage){
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(login, password)
        .then(user => {
            console.log('Logou!', user);
            setMessage(null);
        })
        .catch(error => {
            setMessage(error.message);
        }).then(user => {
            setLoading(false);
        });
}

export default function LoginScreen () {
    const [login, onChangeLogin] = React.useState(''); //Returns a statefull value (variable) and a function to update it. 
    const [password, onChangePassWord] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState();

    return (
        <View>
            <FormRow>
                <TextInput 
                    placeholder="Login ou E-mail!" autoCompleteType="email" autoFocus={true} 
                    value={login} onChangeText={text => onChangeLogin(text)}/>
            </FormRow>    
            <FormRow>
                <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={text => onChangePassWord(text)}/>
            </FormRow> 
            <View style={styles.buttonRow}>
                <View style={styles.button}>
                    <Button title="Entrar" onPress={() => {logUser(login, password, setLoading, setMessage)}}/>
                </View>
                <View style={styles.button}>
                    <Button title="Novo" onPress={() => {createUser(login, password, setLoading, setMessage)}}/>
                </View>
            </View>
            {loading ? <ActivityIndicator size="large" color="#ff5959"/>: null}
            {message != null ? <Text>{message}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonRow:{
        flexDirection:'row',
        padding:1,
        padding:10
    },
    button:{
        flex: 1,
        margin: 2
    },
});