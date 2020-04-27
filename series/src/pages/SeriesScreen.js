import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import series from '../../series.json';
import SerieCard from '../components/SerieCard';
import style from '../components/styles'

const BtnAddSerie = ({onNavigation}) => (
    <TouchableOpacity style={[style.cardContainer]} onPress={onNavigation}>
        <Image source={require('../../resources/img/mais.png')} style={{width:'100%', height:'100%'}}/>
        {/* <View style={style.card}>
            <Text>Add Série</Text>
        </View> */}
    </TouchableOpacity>
);

const SeriesScreen = props => (
    <View>
        <FlatList data={[...series, {key:series.length.toString(), isLast: true}]} renderItem={({item, index}) => {
            if(item.isLast){
                return (<BtnAddSerie onNavigation={() => props.navigation.navigate('addSerie')}/>);
            } else{
                return (
                    <SerieCard serie={item} index={index} onNavigatge={() =>{props.navigation.navigate('serie', {serie:item})}}/>
                )
            }
            }} numColumns={2} 
            ListHeaderComponent={props => (<View style={{paddingTop:2.5}}/>)}
            ListFooterComponent={props => (<View style={{paddingTop:2.5}}/>)}
        />
        {/*keyExtractor={item => item.id} It's not necessery because series.json has a key propertie.*/}

    </View>
);

export default SeriesScreen;