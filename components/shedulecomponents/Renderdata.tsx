import React from 'react';
import moment from 'moment';
import {View, Text, StyleSheet} from 'react-native';

type Renderdataprops = {
  renitem: any;
  normalstartdate: any;
  normalenddate: any;
};

const Renderdata = (props: Renderdataprops) => {
  console.log(props.renitem);
  return (
    <View style={styles.sheduleopen}>
      <View style={styles.time} accessible={true}>
        <Text style={styles.timeday}>
          {moment(props.renitem.start).format('h')} -{' '}
          {moment(props.renitem.end).format('h')}
        </Text>
        <Text style={styles.amorpm}>
          {moment(props.renitem.end).format('A')}
        </Text>
      </View>

      <View style={styles.showdetails} accessible={true}>
        <Text style={styles.showtitle}>{props.renitem.title}</Text>
        <Text style={styles.showdj}>{props.renitem.duration}</Text>
      </View>
    </View>
  );
};

export default Renderdata;

const styles = StyleSheet.create({
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
});
