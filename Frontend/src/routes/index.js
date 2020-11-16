import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/dashboard';
// import ShowItem from '../pages/ShowItem';
import Payment from '../pages/Payment';
import ShowFriends from '../pages/showFriends'
import PayNow from '../pages/PayNow';
import SplitBill from '../pages/SplitBill';
import Notification from '../pages/Notification';
import Approvate from '../pages/Approvate';
import Splash from '../pages/Splash'

const PagesRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <PagesRoutes.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F5F5F5' }
      }}
      initialRouteName="Splash"

    >
      <PagesRoutes.Screen  name="Dashboard" component={Dashboard}/>
      <PagesRoutes.Screen  name="Payment" component={Payment}/>
      <PagesRoutes.Screen  name="showFriends" component={ShowFriends}/>
      <PagesRoutes.Screen  name="SplitBill" component={SplitBill}/>
      <PagesRoutes.Screen  name="payNow" component={PayNow}/>
      <PagesRoutes.Screen  name="Notification" component={Notification}/>
      <PagesRoutes.Screen  name="Splash" component={Splash}/>
      <PagesRoutes.Screen  name="Approvate" component={Approvate}/>
    </PagesRoutes.Navigator>
  )
}

export default AppRoutes;