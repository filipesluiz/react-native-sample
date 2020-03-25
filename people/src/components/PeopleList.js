import React from 'react';
import {StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const {peoples} = props;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={peoples} 
                renderItem={({item}) => <PeopleListItem key={item.name.first} people={item}/>} 
                keyExtractor={item => item.login.md5}/>
        </SafeAreaView>
    );  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;//Permite que a variável header seja importada e usada em outro arquivo js