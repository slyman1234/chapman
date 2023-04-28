import { StyleSheet,View, Image } from "react-native";
import React from "react";



const Headercomponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.radiohead}>
        <Image source={require("../../assets/radiohead.png")} />
      </View>
    </View>
  );
};

export default Headercomponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingTop: 30,
  },

  radiohead: {
    paddingTop: 50,
  },
});
