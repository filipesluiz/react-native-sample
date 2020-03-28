import React from 'react';
import {View, TextInput} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
    render(){
        return(
            <View>
                <FormRow>
                    <TextInput placeholder="Login ou E-mail!" autoCompleteType="email" autoFocus={true}/>
                </FormRow>    
                <FormRow>
                    <TextInput placeholder="Senha" secureTextEntry/>
                </FormRow> 
            </View>
        );
    }
}