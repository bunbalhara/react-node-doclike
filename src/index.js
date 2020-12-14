import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";

const MOUNT_NODE = document.getElementById('root');

import { translationMessages } from './translations';

const render = messages => {
    ReactDOM.render(
        <App messages = {messages} />
        , MOUNT_NODE);
};

if (module.hot) {
    module.hot.accept(['./translation', 'Container/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render(translationMessages);
    });
}

render(translationMessages);

if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install();
}
