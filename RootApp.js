/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import App from "./App";

const store = configureStore();

class RootApp extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}


export default (RootApp)