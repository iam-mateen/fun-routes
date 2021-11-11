import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from "./routes/MainRoutes";
import {Provider, useSelector} from "react-redux";
import store from "./store/store";
import AuthRoutes from "./routes/AuthRoutes";
import {LogBox} from "react-native";
import firebase from 'firebase/compat'
import firebaseConfig from './config/firebase';

export default () => {
    firebase.initializeApp(firebaseConfig);
    LogBox.ignoreAllLogs(true)
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {
    const token = useSelector(redux => redux.token);
    return (
        <NavigationContainer>
            {token ? <MainRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}
