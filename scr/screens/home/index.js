import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {useSelector} from 'react-redux';
import Account from './account_balance.svg';

const Teste = () => <SvgXml width="35" height="35" xml={Account} />;

const Home = ({navigation}) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')} // We added an onPress event which would navigate to the About screen
      />

      <Teste />
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
