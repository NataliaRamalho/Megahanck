import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes';

const IndexApp = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0493D5" />
      <View style={{ flex: 1}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}

export default IndexApp;