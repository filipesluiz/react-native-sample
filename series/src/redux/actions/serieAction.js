import {auth, db} from '../../components/dao/Firebase';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => ({
     type: SET_FIELD,
     field,
     value
});

export const SET_NEW_SERIE = 'SET_NEW_SERIE';
export const setNewSerie = () => ({
     type: SET_NEW_SERIE
});

export const SET_EDIT_SERIE = 'SET_EDIT_SERIE';
export const setEditSerie = (serie) => ({
     type: SET_EDIT_SERIE,
     serie
});

export const save = (serie) => {
     const userId = auth.currentUser.uid;
     /**Using async/await */
     

     return async dispatch => serie.key 
     ? await db.collection(`users/${userId}/series`).doc(serie.key).set(serie) 
     : await db.collection(`users/${userId}/series`).add(serie);
     
     /*db.collection(`users/${userId}/series`).add(serie)
     .then((docRef) => {
          console.log('Serie Saved on DataBase Cloud Firestore!!! ID = ', docRef.id);
     }).catch((error) =>{
          console.error("Error adding document!!!", error);
     });*/
}

export const ADD_SERIE_TO_STATE = 'ADD_SERIE_TO_STATE';
export const RESET = 'RESET';

const addSeriesToState = (series, reload) => ({
     type:ADD_SERIE_TO_STATE,
     series, 
     reload
});

export function findAll(reload){
     const userId = auth.currentUser.uid;
     /** Using listener, ocorrurs performance problem. Firebase version 7.14.4 **/
     // return dispatch => db.collection(`users/${userId}/series`).onSnapshot(function(snapshot){
     //      var series = [];
     //      snapshot.forEach(doc => {
     //           series.push({...doc.data(), key:doc.id});
     //      });
     //      dispatch(addSeriesToState(series));
     // });
     return dispatch => db.collection(`users/${userId}/series`).get().then(querySnapshot => {
              var series = [];
              querySnapshot.forEach(doc => {
                   series.push({...doc.data(), key:doc.id});
               });
               dispatch(addSeriesToState(series, reload));
          });
}

export const remove = (serie) => {
     const userId = auth.currentUser.uid;
     return dispatch => {
          return db.collection(`users/${userId}/series`).doc(serie.key).delete();
     } 
}