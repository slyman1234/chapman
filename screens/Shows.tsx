import { StyleSheet, View, ActivityIndicator } from "react-native";
import React,{ useState} from "react";
import Headersrusable from "../components/reusablecomponents/Headersrusable";
// import Showstabcomponents from "../components/showscreencomponents/Showstabcomponents";
// import Showstabdetails from "../components/showscreencomponents/Showstabdetails";
import colortype from "../constant/colors";
import { ScrollView } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import customCss from "./Customcss";
const Shows = () => {


  const [webViewLoaded, setWebViewLoaded] = useState(false);

  const injectedJavaScript = `
  function hideHeaderToggle() {var headerToggle = document.getElementsByClassName("et_pb_section"), i;for (i = 0; i < headerToggle.length; i += 1) {headerToggle[i].style.background = "black";};}; hideHeaderToggle();   function changeTextcolorToggle() {var textToggle = document.getElementsByClassName("et_pb_module_header"), i;for (i = 0; i < textToggle.length; i += 1) {textToggle[i].style.color = "white";};}; changeTextcolorToggle();    
  
  const filterablePortfolio = document.querySelector('.et_pb_filterable_portfolio');
  const activeFilterLinks = filterablePortfolio.querySelectorAll('.et_pb_portfolio_filters li a');
  
  activeFilterLinks.forEach(link => {
    link.style.backgroundColor = '#000';
  });
  
  const textPortfolio = document.querySelector('.et_pb_module_header');
  const textFilterLinks = textPortfolio.querySelectorAll('.et_pb_module_header');
  
  textFilterLinks.forEach(link => {
    link.style.color = '#fff';
  });
  `;


  const runBeforeFirst = `
  window.isNativeApp = true;
  true; // note: this is required, or you'll sometimes get silent failures
`;

  return (
    <View style={styles.container}>
      <ScrollView>
      <Headersrusable title="Shows" />
      <WebView
      source={{uri: "https://chapmanradio.live/shows"}}
      style={styles.showplayer}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      injectedJavaScript={injectedJavaScript}
      injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
      onLoad={() => setWebViewLoaded(true)}
      onMessage={(event) => {}}
      ref={() => {}}

    />
          {!webViewLoaded && <ActivityIndicator style={styles.activityIndicator} />}

      </ScrollView>
  
    </View>
  );
};

export default Shows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colortype.black,
    width: "100%",
  },
  showplayer: {
    flex: 1,
    paddingVertial: 20,
    backgroundColor: "#000000",
    top: -80,
    height:1700
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
