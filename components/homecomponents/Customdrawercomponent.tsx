import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Feather,
  Fontisto,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

const Customdrawercomponent = ({ navigation }) => {
  return (
    <View style={styles.drawercontent}>
      <View style={styles.tophead}>
        <View style={styles.menu}>
          <Text style={styles.menutext}>Menu</Text>
        </View>
        <View style={styles.closecontainer}>
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <FontAwesome name="times" style={styles.close} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.callus}>
        <View style={styles.callusphone}>
          <Feather name="phone-call" style={styles.callusicon} />
        </View>
        <View>
          <Text style={styles.callustext}>Call us</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.website}>
        <View style={styles.websitephone}>
          <Fontisto name="world" style={styles.websiteicon} />
        </View>
        <View>
          <Text style={styles.websitetext}>Website</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.followus}>
        <View></View>
        <Text style={styles.followustext}>Follow us:</Text>

        <View style={styles.followusicons}>
          <TouchableOpacity style={styles.insta}>
            <Entypo name="instagram" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="tiktok" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Customdrawercomponent;
const styles = StyleSheet.create({
  drawercontent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    blurRadius: 90,
  },

  tophead: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    alignItems: "center",
  },
  menu: {
    width: "40%",
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
    alignItems: "flex-end",
    right: 0,
    left: 70,
  },
  menutext: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
  },
  closecontainer: {
    width: "50%",
    alignItems: "flex-end",
  },

  close: {
    fontSize: 17,
    color: "#fff",
  },
  callus: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",

    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  callustext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  callusphone: {
    paddingHorizontal: 10,
  },
  callusicon: {
    fontSize: 17,
    color: "#fff",
  },

  website: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",

    marginTop: -30,
    paddingVertical: 20,
    left: 5,
  },
  websitetext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  websitephone: {
    paddingHorizontal: 10,
  },
  websiteicon: {
    fontSize: 17,
    color: "#fff",
  },
  followus: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    left: 5,
  },
  followustext: {
    color: "#fff",
    left: 5,
    fontWeight: "600",
    fontSize: 16,
  },
  followusicons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  insta: {
    paddingHorizontal: 15,
  },
});
