import {StatusBar, ScrollView, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {backgroundStyle, isDarkMode} from '../constants/color';

const MainScreen = () => {
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>shjhfdjifj</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default MainScreen;
