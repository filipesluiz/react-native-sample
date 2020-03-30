import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../components/firebase';

function tryLogin(login, password, setLoading, setMessage){
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(`${login}`, `${password}`)
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
    const [login, onChangeLogin] = React.useState(); //Returns a statefull value (variable) and a function to update it. 
    const [password, onChangePassWord] = React.useState();
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
            <Button title="Entrar" onPress={() => {tryLogin(login, password, setLoading, setMessage)}}/>
            {loading ? <ActivityIndicator size="large" color="#ff5959"/>: null}
            {message != null ? <Text>{message}</Text> : null}
        </View>
    );
}