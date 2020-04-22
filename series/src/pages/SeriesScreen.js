import React from 'react';
import {Text, View, FlatList} from 'react-native';

import series from '../../series.json';
import SerieCard from '../components/SerieCard';

const SeriesScreen = props => (
    <View>
        <FlatList data={series} renderItem={({item, index}) => (
            <SerieCard serie={item} index={index} onNavigatge={() =>{props.navigation.navigate('serie', {serie:item})}}/>
            )} numColumns={2} 
            ListHeaderComponent={props => (<View style={{paddingTop:2.5}}/>)}
            ListFooterComponent={props => (<View style={{paddingTop:2.5}}/>)}
        />
        {/*keyExtractor={item => item.id} It's not necessery because series.json has a key propertie.*/}

    </View>
);

export default SeriesScreen;