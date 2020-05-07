import firebase from 'firebase';
import 'firebase/firestore'

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => ({
     type: SET_FIELD,
     field,
     value
});

export const save = (serie) => {
     const userId = firebase.auth().currentUser.uid;
     const db = firebase.firestore();
     
     db.collection(`users/${userId}/series`).add(serie)
     .then((docRef) => {
          console.log('Serie Saved on DataBase Cloud Firestore!!! ID = ', docRef.id);
     }).catch((error) =>{
          console.error("Error adding document!!!", error);
     });
     //firebase.database().ref(`users/${userId}/series`).set(serie);//.then(() => console.log('Série salva!!!!!'));
}