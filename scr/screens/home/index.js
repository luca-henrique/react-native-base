import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import SvgImport from './Text';
import Account from './account_balance.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')} // We added an onPress event which would navigate to the About screen
      />

      <SvgImport />

      <Account />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Home;
