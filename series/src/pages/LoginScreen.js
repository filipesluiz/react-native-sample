import React from 'react';
import {View, TextInput, Button} from 'react-native';
import FormRow from '../components/FormRow';

function log(login, password){
   //console.log(login);
}

export default function LoginScreen () {
    const [login, onChangeLogin] = React.useState(); //Returns a statefull value (variable) and a function to update it. 
    const [password, onChangePassWord] = React.useState();
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
            <Button title="Entrar" onPress={log(login, password)}/>
        </View>
    );
}

