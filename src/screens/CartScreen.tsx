import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';

const CartScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <Text style={styles.ScreenTitle}>Cart Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingLeft: SPACING.space_30,
  },
});

export default CartScreen;
