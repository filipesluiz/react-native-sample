import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/** Using version 5 from react-navigation. See https://reactnavigation.org/docs/params **/
export default function PeopleDetailPage({route, navigation}) { 
    const {people} = route.params;
    navigation.setOptions({
        title:`${people.name.first} ${people.name.last}`
    });
    return (
        <View style={styles.container}>
            <Image source={{ uri: people.picture.large }} style={styles.avatar}/>
            <View style={styles.detailContainer}>
                <Line label="Email:" content={people.email}/>
                <Line label="Cidade:" content={people.location.city}/>
                <Line label="Estado:" content={people.location.state}/>
                <Line label="Tel:" content={people.phone}/>
                <Line label="Cel:" content={people.cell}/>
                <Line label="Nacionalidade:" content={people.nat}/>
            </View>
        </View>
    );
}

const Line = ({label = "", content = ""}) => { //If it's undefined, receive empty string
    return (
        <View style={styles.line}>
            <Text style={styles.cell, styles.label}>{label}</Text>
            <Text style={styles.cell, styles.content}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 20
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 10, 
        elevation: 3, //3d effect and shadow
        borderRadius: 10
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5',
    },
    cell: {
        fontSize: 15,
        paddingLeft: 3,
        borderWidth:1
        
    },
    content: {
        flex:4
    },
    label: {
        fontWeight: "bold",
        flex: 2
    }
});