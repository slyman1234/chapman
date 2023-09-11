import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const Customdrawercomponent = ({navigation}) => {
  const handlePress = async () => {
    const url = 'https://chapmanradio.live';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };

  const handleInsta = async () => {
    const url = 'https://www.instagram.com/chapmanradio';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };

  const handleYoutube = async () => {
    const url = 'https://m.youtube.com/@chapmanradio4704';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };

  const handleTitok = async () => {
    const url = 'https://www.tiktok.com/@chapmanradio';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };

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
    <View style={styles.drawercontent}>
      <View style={styles.closecontainer}>
        <TouchableOpacity onPress={navigation.toggleDrawer}>
          <FontAwesome name="times" style={styles.close} />
        </TouchableOpacity>
      </View>

      <View style={styles.menunew}>
        <View style={styles.menucon}>
          <Text style={styles.menutexting}>Menu</Text>

          <TouchableOpacity style={styles.callus} onPress={handlePhone}>
            <View style={styles.callusphone}>
              <Feather name="phone-call" style={styles.callusicon} />
            </View>
            <View>
              <Text style={styles.callustext}>Call us</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.callus} onPress={handlePress}>
            <View style={styles.callusicon}>
              <Fontisto name="world" style={styles.callustext} />
            </View>
            <View>
              <Text style={styles.callustext}>Website</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.followus}>
            <View></View>
            <Text style={styles.followustext}>Follow us:</Text>

            <View style={styles.followusicons}>
              <TouchableOpacity style={styles.insta} onPress={handleInsta}>
                <Entypo name="instagram" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleTitok}>
                <FontAwesome5 name="tiktok" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.youtube} onPress={handleYoutube}>
                <FontAwesome5 name="youtube" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Customdrawercomponent;
const styles = StyleSheet.create({
  drawercontent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    blurRadius: 90,
    width: '100%',
  },

  menunew: {},
  menucon: {
    width: '100%',
    alignItems: 'center',
  },
  menutexting: {
    color: '#fff',
    width: '50%',
    fontSize: 36,
    fontWeight: '700',
  },

  tophead: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    alignItems: 'center',
  },
  menu: {
    width: '50%',
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
    alignItems: 'flex-end',
    right: 0,
  },
  menutext: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
  },
  closecontainer: {
    width: '50%',
    alignItems: 'flex-end',
    top: 30,
    marginLeft: 30,
  },

  close: {
    fontSize: 17,
    color: '#fff',
  },
  callus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 10,
    marginTop: 10,
  },
  callustext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
  },
  callusphone: {
    marginLeft: 10,
    marginRight: 10,
  },
  callusicon: {
    fontSize: 17,
    color: '#fff',
  },

  website: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',

    marginTop: -30,
    paddingVertical: 20,
    left: 5,
  },
  websitetext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  websitephone: {
    paddingHorizontal: 10,
  },
  websiteicon: {
    fontSize: 17,
    color: '#fff',
  },
  followus: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 20,
  },
  followustext: {
    color: '#fff',
    left: 5,
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 20,
  },
  followusicons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  insta: {
    paddingHorizontal: 15,
  },
  youtube: {
    paddingHorizontal: 15,
  },
});
