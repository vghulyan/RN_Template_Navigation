import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';

const DetailsScreen = ({navigation /*, route*/}: any) => {
  // console.log('Params: ', route.params);
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

      <Text style={styles.ScreenTitle}>Details Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Payment');
        }}>
        <Text style={styles.NavigateToTitle}>Go To Payment Screen</Text>
      </TouchableOpacity>
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
  NavigateToTitle: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_light,
  },
});

export default DetailsScreen;
