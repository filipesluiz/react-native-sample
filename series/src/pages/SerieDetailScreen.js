import React from 'react';
import {LayoutAnimation, Platform, UIManager, Text, ScrollView, View, Image, TouchableWithoutFeedback} from 'react-native';

import styles from '../components/styles'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

const Row = ({label, value}) => (
    <View style={styles.line}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.content}>{value}</Text>
    </View>
)

function getExpandedText(expanded, text){
    let size = text.length;
    let defaultSize = 300;
    let shortText = !expanded && text.length >= defaultSize ? text.substr(0, defaultSize).concat('[...]') : text;
    return shortText;
}

export default function SerieDetail({route}) {
    const {serie} = route.params;
    const [expanded, setExpanded] = React.useState(false);

    return (
        <ScrollView>
            <Image style={styles.detailImg} source={{uri:serie.img}} aspectRatio={1} resizeMode='contain'/>
            <Row label={'Título'} value={serie.title}/>
            <Row label={'Gênero'} value={serie.gender}/>
            <Row label={'Nota'} value={serie.rate}/>
            <TouchableWithoutFeedback onPress={() =>{
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                    setExpanded(!expanded);
                }}>
                <View style={styles.lineLongText}>
                    <Text style={styles.label}>Descrição</Text>
                    <Text style={styles.longText}>{getExpandedText(expanded, serie.description)}</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
} 

