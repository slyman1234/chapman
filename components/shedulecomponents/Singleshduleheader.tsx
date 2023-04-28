import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const Singleshduleheader = ({ navigation }) => {
  return (
    <View style={styles.showsheader}>
      <View>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.navigate("HomeScreens")}
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Click to go back to Dj shedule page"
        >
          <View style={styles.goback} accessibilityRole={'button'}>
            <SimpleLineIcons name="arrow-left" size={24} color="#fff" />
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

export default Singleshduleheader;

const styles = StyleSheet.create({
  showsheader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  back: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  backbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "34%",
  },
  goback: {
    flexDirection: "row",
  },
});
