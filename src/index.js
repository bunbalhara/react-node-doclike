import React from 'react';
import ReactDOM from 'react-dom';
import { translationMessages } from './translations';
import loadable from "Utils/loadable";

const App = loadable(()=>import("Containers/App"))

const MOUNT_NODE = document.getElementById('root');

const render = async (messages) => {
    ReactDOM.render(
        <App messages = {messages} />
        , MOUNT_NODE);
};

if (module.hot) {
    module.hot.accept(['./translation', 'Container/App'], async () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        await render(translationMessages);
    });
}

render(translationMessages).then(() => {
    console.log('Loaded');
});

if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install();
}
