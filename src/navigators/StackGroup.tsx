import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default StackGroup;
