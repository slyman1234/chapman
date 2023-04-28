import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Showsheader from "../components/showscomponents/Showsheader";
import Studentuniondetails from "../components/showscomponents/studentunion/Studentuniondetails";
import colortype from "../constant/colors";
import { ScrollView } from "react-native-gesture-handler";

const Studentunion = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <ScrollView>
      <Showsheader navigation={navigation} />
      <Studentuniondetails />
      </ScrollView>
      </View>
   
  
    </SafeAreaView>
  );
};

export default Studentunion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colortype.black,
  },
});
