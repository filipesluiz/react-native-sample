import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      peoples: [],
      showLoading : true,
      error: false
    }
  }
  /** Executa apos o componente ser renderizado.**/
  componentDidMount(){
    axios.get("https://randomuser.me/api?nat=br&results=150").then(response => {
      const {results} = response.data;
      this.setState({
        peoples: results,
        showLoading: false
      });
      //quando o state é alterado, o React chama o Render novamente
    }).catch(error => {
      this.setState({
        showLoading: true,
        error: true
      });
    });
  }

  renderPageContent(){
    if (this.state.error){
      return <Text style={{color: 'red', alignSelf: "center"}}>Ocorreu um erro! Favor tentar novamente mais tarde.</Text>;
    }
    if (this.state.showLoading){
      return <ActivityIndicator size="large" color="#6ca2f7"/>;
    }
    return <PeopleList peoples={this.state.peoples}/>;
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:"center"}}>
        {this.renderPageContent()}
      </View>
    );
    
  }
}

