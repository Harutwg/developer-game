/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'reduxStore/store';

import AppCoitaner from 'appRoot/index';

//console.error(AppCoitaner, 'AppCoitaner');

export default class App extends PureComponent<any, any> {
  render() {
      return (
              <Provider store={store}>
                  <AppCoitaner />
              </Provider>
          );
  }
}
