import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFonts} from 'expo-font';
import React from 'react';
import colortype from '../../constant/colors';
const Streamscomponent = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    'SFProText-Regular': require('../../assets/fonts/SFProText-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.streams}>
      <View accessible={true}>
        <Text style={styles.streamstext}>Streams</Text>
      </View>

      <View style={styles.streamsbutton}>
        <View>
          <TouchableOpacity
            style={styles.showsbutton}
            onPress={() => navigation.navigate('studentshow')}
            accessible={true}
            accessibilityLabel="Student shows"
            accessibilityHint="View student shows"
          >
            <View accessibilityRole="button">
              <Text style={styles.showsbuttontext}>Student Shows</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.sportsbutton}
            onPress={() => navigation.navigate('sports')}
            accessible={true}
            accessibilityLabel="Sports and Events Shows"
            accessibilityHint="View Sports and events shows"
          >
            <View accessibilityRole="button">
              <Text style={styles.sportsbuttontext}>Sports & Events</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.studentsbutton}
            onPress={() => navigation.navigate('studentunion')}
            accessible={true}
            accessibilityLabel="Student union streams"
            accessibilityHint="View Student union streams"
          >
            <View accessibilityRole="button">
              <Text style={styles.studentsbuttontext}>
                Student Union Stream
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Streamscomponent;

const styles = StyleSheet.create({
  streamstext: {
    color: 'rgba(121, 193, 66, 0.9);',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'Roboto',
  },
  streams: {
    justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
    width: '100%',
  },

  streamsbutton: {
    width: '80%',
    paddingVertical: 20,
  },
  showsbutton: {
    borderWidth: 1,
    borderColor: colortype.green,
    height: 40,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  sportsbutton: {
    borderWidth: 1,
    borderColor: colortype.red,
    height: 40,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  studentsbutton: {
    borderWidth: 1,
    borderColor: colortype.orange,
    height: 40,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  showsbuttontext: {
    color: colortype.green,
    fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'Roboto',
  },

  sportsbuttontext: {
    color: colortype.red,
    fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'Roboto',
  },

  studentsbuttontext: {
    color: colortype.orange,
    fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'Roboto',
  },
});
