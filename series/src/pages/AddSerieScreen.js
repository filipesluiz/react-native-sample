import React from 'react';
import {View, TextInput, Picker, Slider, Text, Button, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import FormRow from '../components/FormRow';
import {useDispatch, useSelector} from 'react-redux';
import {setField, save} from '../redux/actions'

export default function AddSerieScreen({route, navigation}){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
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
                        <Picker.Item label="Policital" value="police" />
                        <Picker.Item label="Comédia" value="comedy" />
                        <Picker.Item label="Terror" value="horror" />
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
                            await dispatch(save(serie));
                            navigation.goBack();
                        }} disabled={isLoading}/>
                </FormRow>
                {isLoading ? <ActivityIndicator size="large" color="#ff5959"/>: null}    
            </ScrollView>
        </KeyboardAvoidingView>
    );
}