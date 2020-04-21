import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        padding:5,
        height:Dimensions.get("window").width / 2,
    },
    card:{
        flex:1,
        borderWidth:1   
    },
    cardTitle:{
        color:'white',
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center"
    },
    cardTitleWrapper:{
        backgroundColor:'black',
        height:50,
        position:"absolute",
        bottom:0,
        opacity:0.8,
        width:'100%',
        padding:10
    }
});

export default styles;
