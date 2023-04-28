import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Headersrusable from "../components/reusablecomponents/Headersrusable";
import Shedulesdetails from "../components/shedulecomponents/Shedulesdetails";
import colortype from "../constant/colors";
import { getItems } from "../api/Apis";

const Sheduling = ({ navigation }) => {
  interface ApiResponse {
    length: number;
    items: String;
  }

  const [data, setData] = useState<ApiResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems()
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
      <Headersrusable title="Shedule" />
      <Shedulesdetails navigation={navigation} data={data} loading={loading} />
    </View>
  );
};

export default Sheduling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    width: "100%",
  },
});
