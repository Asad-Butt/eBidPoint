import React from 'react';
import {Text, View} from 'react-native';
// import AuthNavigation from './src/navigations/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/navigations/rootNavigation';

import {LogBox} from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
export default App = () => {
  console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <AuthNavigation />
      </NavigationContainer>
    </View>
  );
};
