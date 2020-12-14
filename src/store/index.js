
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import firebase from '../firebase';

export const makeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState,
        compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
            reduxFirestore(firebase)
        ));
};
