import {StyleSheet, SafeAreaView, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import Showsheader from '../components/showscomponents/Showsheader';
import Sportdetails from '../components/showscomponents/sportsdetails/Sportdetails';
import colortype from '../constant/colors';
import {ScrollView} from 'react-native-gesture-handler';

type MyScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Sports = ({navigation}: MyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <Showsheader navigation={navigation} />
          <Sportdetails />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Sports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colortype.black,
  },
});
