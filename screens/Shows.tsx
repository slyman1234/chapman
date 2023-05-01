import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Headersrusable from '../components/reusablecomponents/Headersrusable';
import colortype from '../constant/colors';
import {ScrollView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import {injectedJavaScript, runBeforeFirst} from './Customcss';

const Shows = () => {
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Headersrusable title="Shows" />
        <WebView
          source={{uri: 'https://chapmanradio.live/shows'}}
          style={styles.showplayer}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={injectedJavaScript}
          injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
          onLoad={() => setWebViewLoaded(true)}
          onMessage={() => {}}
          ref={() => {}}
        />
        {!webViewLoaded && (
          <ActivityIndicator style={styles.activityIndicator} />
        )}
      </ScrollView>
    </View>
  );
};

export default Shows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    width: '100%',
  },
  showplayer: {
    flex: 1,
    paddingVertial: 20,
    backgroundColor: '#000000',
    top: -80,
    height: 1700,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
