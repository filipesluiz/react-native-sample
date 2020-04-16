import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../components/firebase';
import {logUser} from '../redux/actions';
import {connect} from 'react-redux';



class LoginScreen extends React.Component {
    
    state = {
        login:'',
        password:'',
        loading:false,
        message:''
    }
    
    createUser(login, password){
        Alert.alert('Criar nova conta', `Deseja realmente criar uma conta com o e-mail: ${login} ?`,//Using template strings
        [
            {text:'Não', onPress: () => console.log('User dont want create account!')},
            {text:'Sim',
                onPress: () => {
                    this.setState({loading:true});
                    firebase.auth().createUserWithEmailAndPassword(login, password)
                    .then(user => {
                        this.setState({message:"Usuário criado com sucesso!"});
                    }).catch(error => {
                        this.setState({message:error.message});
                    }).then(user => {
                        this.setState({loading:false});
                    });
                }
            }
        ],
        {cancelable: false})
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
                        <Button title="Entrar" onPress={() => {this.setState({loading:true}), this.props.logUser(this.state.login, this.state.password)}}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Novo" onPress={() => {createUser(this.state.login, this.state.password)}}/>
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

export default connect(null, {logUser})(LoginScreen);