import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class TodoForm extends React.Component {
    state = {
        taskValue: ''
    }
    
    onPress(){
        this.props.dispatchAddList(this.state.taskValue);
        this.refs['todoInput'].clear();//Clean the text from input
    }

    render(){
        //const [taskValue, onChangeTaskValue] = React.useState('');
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput ref="todoInput" style={styles.input} 
                    onChangeText={text => {this.setState({taskValue:text});}}/>
                </View>
                <View style={styles.buttomContainer}>
                    <Button onPress={() => {this.onPress()}} title="Add" color="#3f91d1"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    inputContainer:{
        flex:2
    },
    input:{
        padding:4,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        borderColor: '#3f91d1',
        borderWidth: 1

    },
    buttomContainer:{
        flex:1,
        marginRight:5,
        borderRadius:5,
        borderWidth:1,
        backgroundColor: '#3f91d1',
        borderColor: '#3f91d1'
    }
});

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddList: text => addTodo(text);
//     }
// } Its equals 
// const mapDispatchToProps = {
//     dispatchAddList: addTodo
// }

//export default connect(/**mapStateToProps*/, /*mapDispatchToProps*/)(/* Component */);
export default connect(null, { dispatchAddList: addTodo})(TodoForm);