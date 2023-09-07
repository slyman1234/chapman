import {StyleSheet, Text, TouchableOpacity, View,Linking} from 'react-native';
import React from 'react';
import {SimpleLineIcons, Feather} from '@expo/vector-icons';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type MyScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};
const Showsheader = ({navigation}: MyScreenProps) => {

  const handlePhone = async () => {
    try {
      const url = 'tel:+17145166187';
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.showsheader}>
      <View>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.navigate('HomeScreens')}
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Click to go back to home screen"
        >
          <View style={styles.studentshow} accessibilityRole="button">
            <SimpleLineIcons name="arrow-left" size={24} color="#fff" />
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handlePhone}>
        <Feather name="phone-call" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Showsheader;

const styles = StyleSheet.create({
  showsheader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  back: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    top: 2,
    marginLeft: 4,
  },
  backbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '34%',
  },
  studentshow: {
    flexDirection: 'row',
  },
});
