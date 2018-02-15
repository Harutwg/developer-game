// @flow

import React, { PureComponent } from 'react';
import Login from 'screens/login/';
import About from 'screens/about/';
import Actions from 'screens/actions/';
import Home from 'screens/home/';

import { StackNavigator } from 'react-navigation';

const StackScreens = StackNavigator({
    Login: {
        screen: Login,
    },
    Actions: {
        screen: Actions,
    },
    About: {
        screen: About,
    },
    Home: {
        screen: Home,
    },
}, {
    initialRouteName: 'Login',
    headerMode: 'screen'
});

export default class AppContainer extends PureComponent<any, any> {
    render() {
        return (
            <StackScreens />
        );
    }
}