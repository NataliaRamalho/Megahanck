import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../pages/menu';
import Dashboard from '../pages/dashboard';
import ShowItem from '../pages/ShowItem';

const PagesRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <PagesRoutes.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#1E2026' }
      }}
      initialRouteName="ShowItem"
    >
      <PagesRoutes.Screen name="Menu" component={Menu}/>
      <PagesRoutes.Screen name="ShowItem" component={ShowItem}/>
      <PagesRoutes.Screen  name="Dashboard" component={Dashboard}/>
    </PagesRoutes.Navigator>
  )
}

export default AppRoutes;