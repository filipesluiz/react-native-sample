import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../components/firebase';
import {logUser, createUser} from '../redux/actions';
import {connect} from 'react-redux';



class LoginScreen extends React.Component {
    
    state = {
        login:'',
        password:'',
        loading:false,
        message:''
    }
    
    createUser({login, password}){
        Alert.alert('Criar nova conta', `Deseja realmente criar uma conta com o e-mail: ${login} ?`,//Using template strings
        [
            {text:'Não', onPress: () => console.log('User dont want create account!')},
            {text:'Sim',
                onPress: () => {
                    this.setState({loading:true});
                    this.props.createUser(login, password)
                    .then(() => {
                        this.setState({login:'', password:'', message:"Usuário criado com sucesso!"});
                    }).catch(error => {
                        this.setState({message:error.message});
                    }).then(() => {
                        this.setState({loading:false});
                    });
                }
            }
        ],
        {cancelable: false})
    }

    logUser({login, password}){
        console.log('Logar', login);
        this.setState({loading:true});
        //call function logUser of userAction.js by Redux
        this.props.logUser(login, password)
        .then(() => {
            return this.props.navigation.replace('main');
        }).catch(error => {
            this.setState({message:error.message});
        }).then(() => {
            this.setState({loading:false});
        });
    }

    render(){
        return (
            <View>
                <FormRow>
                    <TextInput 
                        placeholder="Login ou E-mail!" autoCompleteType="email" autoFocus={true} 
                        value={this.state.login} onChangeText={text => this.setState({login:text})}/>
                </FormRow>    
                <FormRow>
                    <TextInput placeholder="Senha" secureTextEntry value={this.state.password} 
                        onChangeText={text => this.setState({password:text})}/>
                </FormRow> 
                <View style={styles.buttonRow}>
                    <View style={styles.button}>
                        <Button title="Entrar" onPress={() => {this.logUser(this.state)}}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Novo" onPress={() => {this.createUser(this.state)}}/>
                    </View>
                </View>
                {this.state.loading ? <ActivityIndicator size="large" color="#ff5959"/>: null}
                {this.state.message != null ? <Text>{this.state.message}</Text> : null}
            </View>
        );
    }
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

export default connect(null, {logUser, createUser})(LoginScreen);