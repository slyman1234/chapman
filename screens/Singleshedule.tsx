import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Singleshduleheader from "../components/shedulecomponents/Singleshduleheader";
import Singlesheduledetails from "../components/shedulecomponents/Singlesheduledetails";
import colortype from "../constant/colors";
import { ScrollView } from "react-native-gesture-handler";

const Singleshedule = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width:"100%"}}>
    
          <Singleshduleheader navigation={navigation} />
          <Singlesheduledetails />
    
      </View>
    </SafeAreaView>
  );
};

export default Singleshedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colortype.black,

  },
});
