import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';

import {CustomIconComponent} from '../components/CustomIconComponent';

const Tab = createBottomTabNavigator();

const CustomTabBarBackground = () => {
  return (
    <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyles} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: CustomTabBarBackground,
        tabBarActiveTintColor: COLORS.primaryOrangeHex,
        tabBarActiveBackgroundColor: COLORS.primaryLightGreyHex,
        tabBarInactiveBackgroundColor: COLORS.secondaryGreyHex,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'home',
              size: 'large',
            }),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'wallet',
              size: 'large',
            }),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'like',
              size: 'large',
            }),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: options =>
            CustomIconComponent({
              ...options,
              name: 'star',
              size: 'large',
            }),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
