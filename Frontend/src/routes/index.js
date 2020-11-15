import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../pages/menu';
import Dashboard from '../pages/dashboard';
import ShowItem from '../pages/ShowItem';
import Payment from '../pages/Payment';
import ShowFriends from '../pages/showFriends'
import SplitBill from '../pages/SplitBill';
import Notification from '../pages/Notification';

const PagesRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <PagesRoutes.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F5F5F5' }
      }}
      initialRouteName="Payment"
    >
      <PagesRoutes.Screen name="Menu" component={Menu}/>
      <PagesRoutes.Screen  name="Dashboard" component={Dashboard}/>
      <PagesRoutes.Screen  name="Payment" component={Payment}/>
      <PagesRoutes.Screen  name="showFriends" component={ShowFriends}/>
      <PagesRoutes.Screen  name="SplitBill" component={SplitBill}/>
      <PagesRoutes.Screen  name="Notification" component={Notification}/>
    </PagesRoutes.Navigator>
  )
}

export default AppRoutes;