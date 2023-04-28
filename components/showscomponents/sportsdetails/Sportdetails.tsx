import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import colortype from "../../../constant/colors";
import streamsurl from "../../../constant/hls";
import Video from 'react-native-video';

const Sportdetails = () => {
  
  const [isPlaying, setIsPlaying] = React.useState(false);  
  const [isMuted, setIsMuted] = React.useState(false);  

  return (
    <View style={styles.container}>
     <View style={styles.titledetails} accessible={true}>
      <Text style={styles.showname}>Sports Stream</Text>
      <Text style={styles.showsubtitle}>Stream 2 </Text>
    </View>

    <Image
      source={require("../../../assets/musicbackground.png")}
      style={styles.musicimage}
    />
    <Video
      source={{
        uri: streamsurl.sports,
        type: 'm3u8',
      }}
      paused={!isPlaying}  
      repeat
      playInBackground={true}
      controls={true}  
      playWhenInactive={true}
      ignoreSilentSwitch="ignore"

    />

    {isPlaying ? (
      <TouchableHighlight   onPress={() => setIsPlaying(p => !p)}   style={styles.playericon}>
        {/* Your stop button component */}
        <Feather name="pause" style={styles.iconplay} />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight    onPress={() => setIsPlaying(p => !p)}   style={styles.playericon}>
        {/* Your play button component */}

        <Feather name="play" style={styles.iconplay}/>
      </TouchableHighlight>
    )}
    <Text style={styles.live}>Live</Text>
    </View>
  );
};

export default Sportdetails;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 0,
    backgroundColor: "#000",
  },
  showname: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "500",
  },
  showplayer: {
    flex: 1,
    paddingVertial: 20,
    height: 600,
    backgroundColor: "#000000",
    top: 40,
  },
  showsubtitle: {
    fontSize: 16,
    color: "#85D245",
  },
  titledetails: {
    alignItems: "center",
    fontWeight: "700",
    width: "100%",
    padding: 59,
  },
  musicimage: {
    height: 292,
    width: "85%",
    alignItems: "center",
    paddingBottom: 50,
  },
  musicdetails: {
    top: 70,
    alignItems: "flex-start",
    width: "70%",
    paddingHorizontal: 50,
  },
  musictitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  musicsubtitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 5,
  },
  playerbutton: {
    marginTop: 60,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    height: 200,
  },

  playericon: {
    backgroundColor: colortype.blackshadow,
    height: 76,
    width: 76,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    top: 30,
  },
  iconplay: {
    alignSelf: "center",
    marginLeft: 5,
    fontSize: 30.5,
    color: "#fff",
  },
  live: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    top: 40,
  },
});
