import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../pages/home';
import Search from '../pages/search';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
