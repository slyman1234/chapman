import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Entypo} from '@expo/vector-icons';

const Menubar = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.togglebar}
      onPress={navigation.toggleDrawer}
      accessible={true}
      accessibilityLabel="Home Menu"
      accessibilityHint="Click to open menu"
    >
      <View style={styles.menubar} accessibilityRole={'button'}>
        <View style={styles.menuitem}>
          <Entypo name="menu" size={24} color="#ffffff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Menubar;

const styles = StyleSheet.create({
  menubar: {
    height: 50,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  menuitem: {
    alignSelf: 'flex-end',
    left: 40
  },
  togglebar: {
    alignSelf: 'flex-end',
    paddingRight: 40,
  },
});
