import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import images from '../../constant/image';

type Headerprops = {
  title: String;
};

const Headersrusable = (props: Headerprops) => {
  return (
    <View style={styles.headercontainer}>
      <View>
        <Image source={images.radiohead} style={styles.headerimage} />
      </View>
      <View style={styles.schedule}>
        <Text style={styles.scheduletext}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Headersrusable;

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    width: '80%',
    paddingTop: 70,
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },

  headerimage: {
    height: 48,
    width: 44,
  },
  schedule: {
    marginTop: 15,
    marginLeft: 5,
  },
  scheduletext: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
});
