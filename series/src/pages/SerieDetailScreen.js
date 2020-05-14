import React, { useEffect } from 'react';
import {LayoutAnimation, Platform, UIManager, Text, ScrollView
        , View, Image, TouchableWithoutFeedback, Button, Alert} 
    from 'react-native';
import {useDispatch} from 'react-redux';

import styles from '../components/styles'
import {remove, RESET} from '../redux/actions';

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
    const defaultSize = 300;
    let shortText = !expanded && text.length >= defaultSize ? text.substr(0, defaultSize).concat('[...]') : text;
    return shortText;
}

function deleteSerie(navigation, dispatch, serie) {
    Alert.alert("Deletar", `Deseja realmente remover a série ${serie.title}?`, 
        [
            {text:'Não', onPress: () => console.log('User dont want delete.')},
            {text: 'Sim', onPress: () => {
                    dispatch(remove(serie))
                        .then(() => {
                            Alert.alert("Série!", `A Série ${serie.title} foi deletada!`);
                            navigation.goBack();
                        })
                        .catch(error => {
                             Alert.alert('Deletar', 'Ocorreu um erro ao tentar excluir a série. Tente novamente mais tarde!'); 
                             console.log('Document was not deleted!', error);
                        });
                }
            }        
        ], 
            {cancelable: false}
    );
}

export default function SerieDetail({route, navigation}) {
    const {serie} = route.params;
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch({type:RESET});//For reloed series
    });

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
            <View style={{margin:5}}>
                <Button title="Editar" onPress={() => navigation.navigate('addSerie', {serie:serie})}/>
            </View>
            <View style={{margin:5}}>
                <Button title="Deletar" color="#ff5959" onPress={() => deleteSerie(navigation, dispatch, serie)}/>
            </View>
        </ScrollView>
    );
} 

