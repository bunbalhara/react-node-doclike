import { combineReducers } from 'redux';
import appReducer from "./AppReducer";
import languageReducer from "./LanguageReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    app: appReducer,
    lang: languageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
