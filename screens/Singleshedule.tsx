import {StyleSheet, SafeAreaView, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import Singleshduleheader from '../components/shedulecomponents/Singleshduleheader';
import Singlesheduledetails from '../components/shedulecomponents/Singlesheduledetails';
import colortype from '../constant/colors';

type MyScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Singleshedule = ({navigation}: MyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thenewhead}>
        <Singleshduleheader navigation={navigation} />
        <Singlesheduledetails />
      </View>
    </SafeAreaView>
  );
};

export default Singleshedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colortype.black,
  },
  thenewhead: {
    width: '100%',
  },
});
