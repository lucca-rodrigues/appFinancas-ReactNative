import React from 'react';
import { View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login: createSwitchNavigator({
        Login,
        Register
      })
    }
  )
)

export default Routes;
