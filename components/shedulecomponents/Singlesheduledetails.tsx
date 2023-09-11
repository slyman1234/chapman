import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';

interface RouteParams {
  id: number;
  date: String;
  time: String;
  title: String;
  description: String;
  duration: any;
  normalstartdate: any;
  normalenddate: any;
}

const Singlesheduledetails = () => {
  const route = useRoute();

  const {date, title, description, normalstartdate, normalenddate} =
    route.params as RouteParams;

  const dateString = date;
  const datenews = new Date(dateString);
  const datenew = {weekday: 'long'};
  const dayName = datenews.toLocaleDateString('en-US', datenew).split(',')[0];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 200,
        }}
      >
        <View accessible={true} style={styles.scheduheader}>
          <Text style={styles.text1}>
            {dayName} {moment(normalstartdate).format('h')} -{' '}
            {moment(normalenddate).format('h')}{' '}
            {moment(normalenddate).format('A')}
          </Text>
          <Text style={styles.text3}> </Text>
          <Text style={styles.text2}>{title}</Text>
          <Text style={styles.text4}>
            {description.replace(/<[^>]+>/g, '')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Singlesheduledetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 10,
  },
  text2: {
    color: '#85D245',
    fontSize: 30,
    fontWeight: '800',
    paddingVertical: 7,
    paddingBottom: 30,
  },
  text3: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  text4: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'justify',
  },
  sheduleopen: {
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 40,
  },
  timeday: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
  },
  amorpm: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  showtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  showdj: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 3,
    color: '#81BD61',
  },
  showdetails: {
    left: 2,
    width: '70%',
    top: 0,
    backgroundColor: 'rgba(64, 63, 63, 0.3)',
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: 'flex-start',
    paddingLeft: 40,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  time: {
    backgroundColor: 'rgba(64, 63, 63, 0.3)',
    width: '30%',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scheduheader: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
