/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Home from './app/component/Home'

export default class TutorialReactNative extends Component {
  render() {
    return (
        <NavigatorIOS
          initialRoute={{
            component: Home,
            title: 'Home',
            passProps: { title: '' }
          }}
          style={{flex:1}} />
    );
  }
}


AppRegistry.registerComponent('TutorialReactNative', () => TutorialReactNative);
