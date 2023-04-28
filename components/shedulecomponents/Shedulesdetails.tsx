import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import colortype from "../../constant/colors";
import moment from "moment";
import Renderdatadetails from "./Renderdatadetails";
import Calendar from "./Calender";

type Shdeuleprops = {
  data: any;
  loading: boolean;
  navigation: any;
};

const Shedulesdetails = (props: Shdeuleprops) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateSelected = (date) => {
    setSelectedDate(date);
  };

  const dateTimeString = selectedDate;
  const date = new Date(dateTimeString);
  const dateString = date.toISOString().split("T")[0];

  const filteredItem = props.data?.filter(
    (item) => moment(item.start).format("YYYY-MM-DD") === dateString
  );

  return (
    <View>
      <Calendar selectedDate={selectedDate} onDateSelected={onDateSelected} />

      <View>
        <View style={styles.dayname}>
          <Text style={styles.daynametext}>
            {" "}
            {moment(selectedDate).format("dddd")}
          </Text>
        </View>
        {props.loading === true ? (
          <ActivityIndicator size="large" color={colortype.green} />
        ) : (
          <FlatList
            data={filteredItem}
            numColumns={1}
            renderItem={({ item }) => (
              <Renderdatadetails renitem={item} navigation={props.navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Shedulesdetails;

const styles = StyleSheet.create({
  shedulehead: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  titletext: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  sheduledate: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sheduledateitem: {
    width: 47,
    height: 59,
    borderWidth: 1,
    borderColor: "#E5E8EB",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dadyname: {
    fontSize: 11,
    fontWeight: "400",
    color: "#ffffff",
  },
  daynumber: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
    marginTop: 5,
  },
  sheduledateitemactive: {
    width: 47,
    height: 59,
    borderWidth: 1,
    borderColor: "#E5E8EB",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  scheduledetails: {
    width: "100%",
  },
  daynameinfull: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    paddingHorizontal: 20,
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

  calendarContainer: {
    padding: 10,
  },
  dayname: {
    paddingHorizontal: 20,
  },
  daynametext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
