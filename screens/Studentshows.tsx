import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Showsheader from "../components/showscomponents/Showsheader";
import Studentshowdetail from "../components/showscomponents/studentshows/Studentshowdetail";
import colortype from "../constant/colors";
import { ScrollView } from "react-native-gesture-handler";

interface ApiResponse {
  length: number;
  items: String;
}

const Studentshows = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <Showsheader navigation={navigation} />
          <Studentshowdetail />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Studentshows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colortype.black,
  },
});
