import React from 'react';
import {StatusBar, ScrollView, View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {backgroundStyle, isDarkMode} from '../constants/color';
import InputBin2Dec from '../components/input';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <InputBin2Dec />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
});
