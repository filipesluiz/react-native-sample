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

export const save = (serie) => {
     const userId = auth.currentUser.uid;
     /**Using async/await */
     return async dispatch => await db.collection(`users/${userId}/series`).add(serie);
     
     /*db.collection(`users/${userId}/series`).add(serie)
     .then((docRef) => {
          console.log('Serie Saved on DataBase Cloud Firestore!!! ID = ', docRef.id);
     }).catch((error) =>{
          console.error("Error adding document!!!", error);
     });*/
}

export const ADD_SERIE_TO_STATE = 'ADD_SERIE_TO_STATE';

const addSeriesToState = (series) => ({
     type:ADD_SERIE_TO_STATE,
     series
});

export function findAll(){
     const userId = auth.currentUser.uid;
     return dispatch => db.collection(`users/${userId}/series`).get().then(querySnapshot => {
              var series = [];
              querySnapshot.forEach(doc => {
                   series.push({...doc.data(), key:doc.id});
               });
               dispatch(addSeriesToState(series));
          });
}