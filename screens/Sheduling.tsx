import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Shedulesdetails from '../components/shedulecomponents/Shedulesdetails';
import colortype from '../constant/colors';
import {getItems} from '../api/Apis';
import {ScrollView} from 'react-native-gesture-handler';

type MyScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};
const Sheduling = ({navigation}: MyScreenProps) => {
  interface ApiResponse {
    length: number;
    items: String;
  }

  const [data, setData] = useState<ApiResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems()
      .then(items => {
        // Do something with the items data

        setData(items.items);
        setLoading(false);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.con}>
        <Shedulesdetails
          navigation={navigation}
          data={data}
          loading={loading}
        />
      </ScrollView>
    </View>
  );
};

export default Sheduling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  con: {marginTop: -50},
});
