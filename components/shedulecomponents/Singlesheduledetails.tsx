import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import colortype from "../../constant/colors";
import Renderdata from "./Renderdata";
import { getPlaylist, getsingleItems } from "../../api/Apis";

interface RouteParams {
  id: number;
  date: String;
  time: String;
  title: String;
  duration: any;
  normalstartdate: any;
  normalenddate: any;
}

const Singlesheduledetails = () => {
  const route = useRoute();

  const { id, date, time, title, normalstartdate, normalenddate } =
    route.params as RouteParams;

  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getsingleItems(id)
      .then((items) => {
        // Do something with the items data
        setData(items.items);

        setLoading(false);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View accessible={true} style={styles.scheduheader}>
        <Text style={styles.text1}>{date}</Text>
        <Text style={styles.text2}>{time}</Text>
        <Text style={styles.text3}>{title}</Text>
      </View>

      <View
        style={{
          alignItems: loading === true ? "center" : null,
          justifyContent: loading === true ? "center" : null,
          alignContent: loading === true ? "center" : null,
          height: loading === true ? 700 : null,
          width: loading === true ? "100%" : null,
        }}
      >
        {loading === true ? (
          <ActivityIndicator size="large" color={colortype.green} />
        ) : (
          <FlatList
            data={data}
            numColumns={1}
            renderItem={({ item }) => (
              <Renderdata
                renitem={item}
                normalstartdate={normalstartdate}
                normalenddate={normalenddate}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Singlesheduledetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  text1: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    paddingVertical: 10,
  },
  text2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 7,
  },
  text3: {
    color: "#85D245",
    fontSize: 16,
    fontWeight: "500",
  },
  sheduleopen: {
    flexDirection: "row",
    paddingVertical: 15,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    top: 40,
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
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 3,
    color: "#81BD61",
  },
  showdetails: {
    left: 2,
    width: "70%",
    top: 0,
    backgroundColor: "rgba(64, 63, 63, 0.3)",
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: "flex-start",
    paddingLeft: 40,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  time: {
    backgroundColor: "rgba(64, 63, 63, 0.3)",
    width: "30%",
    alignItems: "center",
    paddingBottom: 5,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scheduheader: {
    alignItems: "center",
  },
});
