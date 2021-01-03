import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

import { makeStore } from '../store';


// Serialize Redux store;
import { saveState, loadState } from '../localStorage';

// firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "../firebase";

const initialState = loadState();
const store = makeStore(initialState);

// Save store to localstorage
store.subscribe(() => { saveState(store.getState()); });


// Firestore Provider props.
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};


// Language
import { LanguageProvider } from "./LanguageProvider";

import 'Assets/scss/app.scss'

import { HomePage } from "Pages/index";

const App = ({ messages }) => {
    return (
        <Provider store = {store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <LanguageProvider messages={messages} >
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component = {HomePage} />
                            <Route path="/find" component = {HomePage} />
                        </Switch>
                    </BrowserRouter>
                </LanguageProvider>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
};

App.propTypes = {
    messages: PropTypes.object
};

export default App;
