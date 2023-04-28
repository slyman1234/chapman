import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Showtabprops = {
  showtype1: String;
  showtype2: String;
  showtype3: String;
  showtype4: String;
};
const Showstabcomponents = (props: Showtabprops) => {
  return (
    <View style={styles.container}>
      <View style={styles.showstab}>
        <TouchableOpacity style={styles.tabone}>
          <Text style={styles.tabonetxt}>{props.showtype1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabtwo}>
          <Text style={styles.tabtwotxt}>{props.showtype2}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.showstab}>
        <TouchableOpacity style={styles.tabthree}>
          <Text style={styles.tabthreetxt}>{props.showtype3}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabfour}>
          <Text style={styles.tabfourtxt}>{props.showtype4}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Showstabcomponents;

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: "80%",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignSelf: "center",
    top: 20,
  },
  showstab: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  tabone: {
    width: "50%",
    borderWidth: 0.5,
    borderColor: "#fff",

    justifyContent: "center",

    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 5,
  },
  tabonetxt: {
    color: "rgba(121, 193, 66, 0.9);",
    fontSize: 24,
  },
  tabtwo: {
    width: "50%",
    borderWidth: 0.5,
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabthree: {
    width: "50%",
    borderWidth: 0.5,
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabfour: {
    width: "50%",
    borderWidth: 0.5,
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabtwotxt: {
    color: "#fff",
    fontSize: 24,
  },
  tabthreetxt: {
    color: "#fff",
    fontSize: 24,
  },
  tabfourtxt: {
    color: "#fff",
    fontSize: 24,
  },
});
