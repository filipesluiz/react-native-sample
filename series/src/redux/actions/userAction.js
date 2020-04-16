import firebase from '../../components/firebase';

export const USER_LOGIN = 'USER_LOGIN';    
const userLogin = (user) => ({
    type: USER_LOGIN,
    user
});

export const USER_LOGIN_SUCESSO = 'USER_LOGIN';    
const userLoginSucesso = (user) => ({
    type: USER_LOGIN_SUCESSO,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';    
const userLogout = () => ({
    type: USER_LOGOUT,
});

//Using redux-thunk for execute a assinchronos action. There are too redux-saga. 
export const logUser = (login, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(login, password)
        .then(user => {
            const action = userLoginSucesso(user);
            dispatch(action);
            //setMessage(null);
        })
        // .catch(error => {
        //     setMessage(error.message);
        // }).then(user => {
        //     setLoading(false);
        // });
}