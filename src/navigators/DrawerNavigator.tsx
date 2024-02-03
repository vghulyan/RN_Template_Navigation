import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';

import {Platform} from 'react-native';
// import {drawerIcon} from '../components/CustomIcon/CustomIcons/CustomIconComponent';

import {COLORS} from '../theme/theme';
import Dashboard from '../screens/Dashboard';
import StackGroup from './StackGroup';
import WishList from '../screens/WishList';
import History from '../screens/History';
import {CustomIconComponent} from '../components/CustomIconComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.transparent,
        drawerInactiveBackgroundColor: COLORS.transparent,
        drawerActiveTintColor: COLORS.primaryOrangeHex,
        drawerInactiveTintColor: COLORS.secondaryLightGreyHex,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: COLORS.transparent,
        drawerStyle: {
          backgroundColor: COLORS.primaryBlackHex,
          width: '60%',
        },
        sceneContainerStyle: {
          backgroundColor: COLORS.primaryBlackHex,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'home',
              size: 'medium',
            }),
        }}
      />
      <Drawer.Screen
        name="Stack Group"
        component={StackGroup}
        options={{
          drawerLabel: 'Stack Group',
          headerShown: true,
          drawerIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'beans',
              size: 'medium',
            }),
        }}
      />
      <Drawer.Screen
        name="Whishlist"
        component={WishList}
        options={{
          drawerLabel: 'Wishtlist',
          headerShown: true,
          drawerIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'like',
              size: 'medium',
            }),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerLabel: 'History',
          headerShown: true,
          drawerIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'bell',
              size: 'medium',
            }),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          headerShown: true,
          drawerIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'bean',
              size: 'medium',
            }),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
