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
     return async dispatch => {
          try {
               return await db.collection(`users/${userId}/series`).add(serie);
          } catch (error) {
               console.error("Error adding document!!!", error);
          }
     }

     /*db.collection(`users/${userId}/series`).add(serie)
     .then((docRef) => {
          console.log('Serie Saved on DataBase Cloud Firestore!!! ID = ', docRef.id);
     }).catch((error) =>{
          console.error("Error adding document!!!", error);
     });*/



}