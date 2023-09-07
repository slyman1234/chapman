import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Headersrusable from '../components/reusablecomponents/Headersrusable';
import colortype from '../constant/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';
import WebView from 'react-native-webview';
import {injectedJavaScript, runBeforeFirst} from './Customcss';

const Shows = () => {
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  const webViewRef: any = useRef(null);

  const handleGoBack = () => {
    webViewRef.current.goBack();
  };

  const handleNavigationStateChange = navState => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headers}>
          <Headersrusable title="Shows" />
        </View>

        {canGoBack && (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={handleGoBack}
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Click to go back to Dj shedule page"
          >
            <View style={styles.goback} accessibilityRole={'button'}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        )}

        <WebView
          source={{uri: 'https://chapmanradio.live/shows'}}
          style={styles.showplayer}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={injectedJavaScript}
          injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
          onLoad={() => {
            setWebViewLoaded(true);
          }}
          onMessage={() => {}}
          ref={webViewRef}
          onNavigationStateChange={handleNavigationStateChange}
          renderLoading={() => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" color="green" />
            </View>
          )}
          startInLoadingState={true}
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
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
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
  back: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 40,
    backgroundColor: '#000',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    borderRadius: 100,
    marginLeft: 20,
    height: 40,
  },
  goback: {
    flexDirection: 'row',
  },
});
