import { View, StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { AntDesign } from "@expo/vector-icons";

type Calenderprops = {
  selectedDate: Date;
  onDateSelected: any;
};

const Calendar = (props: Calenderprops) => {
  return (
    <View style={styles.calendarContainer}>
      <CalendarStrip
        scrollable
        selectedDate={props.selectedDate}
        onDateSelected={props.onDateSelected}
        style={styles.calender}
        leftSelector={
          <View style={styles.leftselector}>
            <AntDesign name="left" size={24} color="white" />
          </View>
        }
        rightSelector={
          <View style={styles.rightselector}>
            <AntDesign name="right" size={24} color="white" />
          </View>
        }
        calendarHeaderStyle={styles.titletext}
        dayContainerStyle={styles.daycontainer}
        dateNumberStyle={styles.daynumber}
        dateNameStyle={styles.dayname}
        iconContainer={styles.iconcontainer}
        highlightDateContainerStyle={styles.higlightdate}
        highlightDateNameStyle={ styles.highlightdatename}
        highlightDateNumberStyle={styles.higlightdatenumber}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calender: {
    height: 200,
    paddingTop: 20,
    paddingBottom: 10,
  },
  leftselector: {
    height: 40,
    width: 20,
    top: 10,
  },
  higlightdate:{
    backgroundColor: "rgba(73, 182, 000, 0.3)"
  },
  rightselector: {
    height: 40,
    width: 20,
    top: 10,
  },
  iconcontainer:{
    top: -85
  },
  daycontainer: {
    borderRadius: 6,
    borderColor: "white",

    borderWidth: 0.5,
  },
  daynumber: {
    color: "white",
  },
  titletext: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },

  showdj: {
    color: "#C2C1C1",
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 3,
  },

  calendarContainer: {
    padding: 10,
  },
  dayname:{
    color: "white"
  },
  highlightdatename:{
    color: "#fff"
  },
  higlightdatenumber:{
    color: "#fff"

  }
});
