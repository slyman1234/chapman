import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";

const Showstabdetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/shows.png")} />
        <Text style={styles.title}>90’s to Now</Text>
      </View>
    </View>
  );
};

export default Showstabdetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    top: -180,
  },
  title: {
    color: "#fff",
    top: 20,
    fontSize: 24,
    fontWeight: "400",
  },
});
