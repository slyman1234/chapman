import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Headercomponent from '../components/homecomponents/Headercomponent';
import Menubar from '../components/Menubar';
import Streamscomponent from '../components/homecomponents/Streamscomponent';
import colortype from '../constant/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationProp, ParamListBase} from '@react-navigation/native';


type MyScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreens = ({navigation}: MyScreenProps) => {



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.stylscroll}>
        <Menubar navigation={navigation} />
        <Headercomponent />
        <Streamscomponent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  stylscroll: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    alignItems: 'center',
    width: '100%',
  },
});
