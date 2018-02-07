import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyPageScreen from './src/screens/MyPageScreen';
import HomeAppliancesListScreen from './src/screens/HomeAppliancesListScreen';
import HomeApplianceDetailScreen from './src/screens/HomeApplianceDetailScreen';
import HomeApplianceEditScreen from './src/screens/HomeApplianceEditScreen';

  const App = StackNavigator(
  {
    MyPage: { screen: MyPageScreen },
    HomeAppliancesList: { screen: HomeAppliancesListScreen },
    HomeApplianceDetail: { screen: HomeApplianceDetailScreen },
    HomeApplianceEdit: { screen: HomeApplianceEditScreen }
  },
);

export default App;
