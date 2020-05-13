import React, { useEffect } from 'react';
import {View, TextInput, Picker, Slider, Text, Button, ScrollView, KeyboardAvoidingView, ActivityIndicator, Alert, useEff} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FormRow from '../components/FormRow';
import {setField, save, setEditSerie, RESET} from '../redux/actions'

export default function AddSerieScreen({route, navigation}){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    
    if(route.params){
        dispatch(setEditSerie(route.params.serie));//Set param serie on state for to edit
        route.params = null; //for to execute only fist access. 
    }

    useEffect(() =>{
        return () => {dispatch({type:RESET})}//It's execute on componentWillUnmount and It's for return the items from database
    })
    
    var serie = useSelector(state => state.serie);
    
    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView style={{borderTopWidth:2, borderBottomWidth:2, borderColor:'#d4d0cd'}}>
                <FormRow>
                    <TextInput 
                        placeholder="Título"
                        onChangeText={text => dispatch(setField('title', text))}
                        value={serie.title}/>
                </FormRow>    
                <FormRow>
                    <TextInput 
                        placeholder="URL da imagem" 
                        onChangeText={text => dispatch(setField('img', text))}
                        value={serie.img}/>
                </FormRow>  
                <FormRow>
                    <Picker selectedValue={serie.gender} 
                        onValueChange={(itemValue, itemIndex) => dispatch(setField('gender', itemValue))}>
                        <Picker.Item label="Policial" value="Policial" />
                        <Picker.Item label="Comédia" value="Comédia" />
                        <Picker.Item label="Ficção Científica" value="Ficção Científica" />
                        <Picker.Item label="Terror" value="Terror" />
                    </Picker>
                </FormRow>
                <FormRow>
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <Text>Nota:</Text>
                        <Text>{serie.rate}</Text>
                    </View>
                    <Slider maximumValue={100} step={5} onValueChange={value => dispatch(setField('rate', value))} value={serie.rate}/>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="Descrição" 
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={text => dispatch(setField('description', text))}
                        value={serie.description}/>
                </FormRow>  
                <FormRow>
                    <Button title="Salvar" onPress={async () => {
                            setIsLoading(true);
                            try {
                                await dispatch(save(serie));
                            } catch (error) {
                                Alert.alert("Erro não esperado!", "Por favor, tente novamente mais tarde!");
                            }
                            navigation.navigate("series");
                        }} disabled={isLoading}/>
                </FormRow>
                {isLoading ? <ActivityIndicator size="large" color="#ff5959"/>: null}    
            </ScrollView>
        </KeyboardAvoidingView>
    );
}