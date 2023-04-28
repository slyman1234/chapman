import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";
import colortype from "../../constant/colors";

type Renderdatdeprops = {
  renitem: any;
  navigation: any;
};

const Renderdatadetails = (props: Renderdatdeprops) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.sheduleopen}
        accessible={true}
        accessibilityLabel="Daily shedule button"
        accessibilityHint="Click to view this dj shedule"
      >
        <View style={styles.time}>
          <Text style={styles.timeday}>
            {moment(props.renitem.start).format("h")} -{" "}
            {moment(props.renitem.end).format("h")}
          </Text>
          <Text style={styles.amorpm}>
            {moment(props.renitem.end).format("A")}
          </Text>
        </View>

        <View style={styles.showdetails}>
          <Text style={styles.showtitle}>{props.renitem.title}</Text>
          <Text style={styles.showdj}>
            {Math.floor(props.renitem.duration / 60)} Minutes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Renderdatadetails;

const styles = StyleSheet.create({
  scheduledetails: {
    width: "100%",
  },

  sheduleopen: {
    flexDirection: "row",
    paddingVertical: 15,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  timeday: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
  amorpm: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  showtitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  showdj: {
    color: "#C2C1C1",
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 3,
  },
  showdetails: {
    right: -2,
    width: "70%",
    top: 0,
    backgroundColor: colortype.backgroundrgb,
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: "flex-start",
    paddingLeft: 20,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingRight: 10,
  },
  time: {
    backgroundColor: colortype.backgroundrgb,
    width: "30%",
    alignItems: "center",
    paddingBottom: 5,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
