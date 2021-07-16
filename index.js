import React from 'react';

import {AppRegistry} from 'react-native';
import Index from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
