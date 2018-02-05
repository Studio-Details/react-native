import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyPageScreen from './src/screens/MyPageScreen';

const App = StackNavigator({
  MyPage: { screen: MyPageScreen }
});

export default App;
