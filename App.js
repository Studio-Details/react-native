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
import NewRepairOrderScreen from './src/screens/NewRepairOrderScreen';

  const App = StackNavigator(
  {
    MyPage: { screen: MyPageScreen },
    HomeAppliancesList: { screen: HomeAppliancesListScreen },
    HomeApplianceDetail: { screen: HomeApplianceDetailScreen },
    HomeApplianceEdit: { screen: HomeApplianceEditScreen },
    NewRepairOrder: { screen: NewRepairOrderScreen }
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: '#ff3d00', height: 60 },
      headerTitleStyle: { color: 'white', fontWeight: 'normal', fontSize: 18 },
      headerBackTitle: null,
      headerTintColor: 'white'
    }
  }
);

export default App;
