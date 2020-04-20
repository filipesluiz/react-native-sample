import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    cardContainer:{
            flex:1,
            padding:10,
            height:Dimensions.get("window").width / 2
        },
    card:{
            flex:1,
            borderWidth:1   
        }
});

export default styles;
