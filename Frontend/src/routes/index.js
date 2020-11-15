import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../pages/menu';
import Dashboard from '../pages/dashboard';
import ShowItem from '../pages/ShowItem';
import Payment from '../pages/Payment';
import ShowFriends from '../pages/showFriends'
import PayNow from '../pages/PayNow';

const PagesRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <PagesRoutes.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F5F5F5' }
      }}
      initialRouteName="payNow"
    >
      <PagesRoutes.Screen name="Menu" component={Menu}/>
      <PagesRoutes.Screen name="ShowItem" component={ShowItem}/>
      <PagesRoutes.Screen  name="Dashboard" component={Dashboard}/>
      <PagesRoutes.Screen  name="Payment" component={Payment}/>
      <PagesRoutes.Screen  name="showFriends" component={ShowFriends}/>
      <PagesRoutes.Screen  
        name="payNow" 
        component={PayNow}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: 'Dividir conta'
        }}
      />
    </PagesRoutes.Navigator>
  )
}

export default AppRoutes;