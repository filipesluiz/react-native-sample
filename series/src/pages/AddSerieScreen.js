import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FormRow from '../components/FormRow';
import {useDispatch, useSelector} from 'react-redux';
import {setField} from '../redux/actions'

export default function AddSerieScreen({route}){
    //const [titulo, onChangeTitulo] = React.useState('');
    const dispatch = useDispatch();
    var serie = useSelector(state => state.serie);
    console.log('render: ', serie);
    return (
        <View>
            <FormRow>
                <TextInput 
                    placeholder="Título" autoFocus={true} 
                    onChangeText={text => dispatch(setField('title', text))}
                    value={serie.title}/>
            </FormRow>    
            <FormRow>
                <TextInput 
                    placeholder="URL da imagem" 
                    onChangeText={text => dispatch(setField('img', text))}
                    value={serie.img}/>
            </FormRow>  
        </View>
    );
}