import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigators';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
