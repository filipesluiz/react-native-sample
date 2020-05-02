import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FormRow from '../components/FormRow';
import {useDispatch, useSelector} from 'react-redux';
import {create, CREATE } from '../redux/actions'

export default function AddSerieScreen({route}){
    //const [titulo, onChangeTitulo] = React.useState('');
    const dispatch = useDispatch();
    const serie = useSelector(state => state.serie);
    console.log(serie.title);
    return (
        <View>
            <FormRow>
                <TextInput 
                    placeholder="Título" autoFocus={true} 
                    onChangeText={text => {
                        serie.title = text; 
                        dispatch(create(serie));
                    }}
                    value={serie.titulo}/>
                {/* <Text>Teste</Text>     */}
            </FormRow>    
        </View>
    );
}