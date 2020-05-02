import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, setTodoText, updateTodo} from '../actions';

class TodoForm extends React.Component {
    
    onPress(){

        const {todo} = this.props;
        console.log("onPress:",todo);
        if(todo.id){
            this.props.dispatchUpdateTodo(todo);
        }
        else{
            this.props.dispatchAddList(todo.text);
        }
       // this.refs['todoInput'].clear();//Clean the text from input
    }

    render(){
        //const [taskValue, onChangeTaskValue] = React.useState('');
        const {text, id} = this.props.todo;
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} 
                    onChangeText={text => {this.props.dispatchSetTodoText(text)}} value={text}/>
                </View>
                <View style={styles.buttomContainer}>
                    <Button onPress={() => {this.onPress()}} title={!id ? 'Add' : 'Save'} color="#3f91d1"/>
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

const mapStateToProps = state => {
    return {
        todo: state.editTodo
    }
}

//export default connect(/**mapStateToProps*/, /*mapDispatchToProps*/)(/* Component */);
export default connect(mapStateToProps
    , { dispatchAddList: addTodo
        , dispatchSetTodoText: setTodoText
        , dispatchUpdateTodo: updateTodo})(TodoForm);