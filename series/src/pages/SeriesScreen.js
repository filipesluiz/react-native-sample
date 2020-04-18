import React from 'react';
import {Text, View, FlatList} from 'react-native';

import series from '../../series.json';
import SerieCard from '../components/SerieCard';

const SeriesScreen = props => (
    <View>
        <FlatList data={series} renderItem={({item}) => (
            <SerieCard serie={item}/>
        )} />
        {/*keyExtractor={item => item.id} It's not necessery because series.json has a key propertie.*/}

    </View>
);

export default SeriesScreen;