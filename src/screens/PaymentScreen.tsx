import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';

const PaymentScreen = ({navigation}: any) => {
  const BackHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.ScreenContainer}>
      <TouchableOpacity
        onPress={() => {
          BackHandler();
        }}>
        <Text style={styles.GoBack}>Go Back</Text>
      </TouchableOpacity>

      <Text style={styles.ScreenTitle}>Payment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GoBack: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginBottom: SPACING.space_20,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingLeft: SPACING.space_30,
  },
});

export default PaymentScreen;
