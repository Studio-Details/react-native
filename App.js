import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyPageScreen from './src/screens/MyPageScreen';
import HomeAppliancesListScreen from './src/screens/HomeAppliancesListScreen';
import HomeApplianceDetailScreen from './src/screens/HomeApplianceDetailScreen'

const App = StackNavigator({
  MyPage: { screen: MyPageScreen },
  HomeAppliancesList: { screen: HomeAppliancesListScreen },
  HomeApplianceDetail: { screen: HomeApplianceDetailScreen },
});

export default App;
