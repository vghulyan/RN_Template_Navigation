import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';

import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <Text style={styles.ScreenTitle}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Details', {
            index: 1,
            id: '1',
            type: 'details',
          });
        }}>
        <Text style={styles.NavigateToTitle}>Go To Details Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.primaryBlackHex,
    //color: COLORS.primaryWhiteHex,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingLeft: SPACING.space_30,
  },
  NavigateToTitle: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_light,
  },
});

export default HomeScreen;
