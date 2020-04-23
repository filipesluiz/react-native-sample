import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    cardContainer:{
        //flex:1,
        //paddingLeft:5,
        //paddingTop:5,
        padding:2.5,
        height: Dimensions.get("window").width / 2,
        width:'50%'
        //box-sizing:border-box. This property exists by default on React Native
    },
    card:{
        flex:1,
        //borderWidth:1   
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
        opacity:0.7,
        width:'100%',
        padding:10
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5',
    },
    cell: {
        fontSize: 15,
        paddingLeft: 3,
        borderWidth:1
        
    },   
    label: {
        fontWeight: "bold",
        flex: 2,
        paddingLeft:5
    },
    content: {
        flex:4
    },
});

export default styles;
