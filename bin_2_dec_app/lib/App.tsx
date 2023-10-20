import React from 'react';
import {SafeAreaView} from 'react-native';

import {backgroundStyle} from './constants/color';
import MainScreen from './screens/main_screen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainScreen />
    </SafeAreaView>
  );
}

export default App;
