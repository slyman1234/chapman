import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Headercomponent from '../components/homecomponents/Headercomponent';
import Menubar from '../components/Menubar';
import Streamscomponent from '../components/homecomponents/Streamscomponent';
import colortype from '../constant/colors';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreens = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.stylscroll}>
        <Menubar navigation={navigation} />
        <Headercomponent />
        <Streamscomponent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  stylscroll:{
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    alignItems: 'center',
  },
});
