import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import colortype from '../../../constant/colors';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import {addTracks} from '../Tracks';
import streamsurl from '../../../constant/hls';
import {setupPlayer} from '../Player';

const Studentshowdetail = () => {
  const playerState = usePlaybackState();

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    if (!isPlayerReady) {
      TrackPlayer.reset();
      setup();
    } else {
      console.log('false');
    }
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks('hlsstream', streamsurl.student, 'hls');
      }

      setIsPlayerReady(isSetup);
    }
  }, [isPlayerReady]);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  async function handlePlayPress() {
    if ((await TrackPlayer.getState()) === State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titledetails} accessible={true}>
        <Text style={styles.showname}>Students Stream</Text>
        <Text style={styles.showsubtitle}>Stream 1 </Text>
      </View>

      <Image
        source={require('../../../assets/musicbackground.png')}
        style={styles.musicimage}
      />

      {playerState === State.Playing ? (
        <TouchableHighlight onPress={handlePlayPress} style={styles.playericon}>
          {/* Your stop button component */}
          <Feather name="pause" style={styles.iconplay} />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight onPress={handlePlayPress} style={styles.playericon}>
          {/* Your play button component */}

          <Feather name="play" style={styles.iconplay} />
        </TouchableHighlight>
      )}

      <Text style={styles.live}>Live</Text>
    </View>
  );
};

export default Studentshowdetail;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 0,
    backgroundColor: '#000',
  },
  showname: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '500',
  },
  showplayer: {
    flex: 1,
    paddingVertial: 20,
    height: 600,
    backgroundColor: '#000000',
    top: 40,
  },
  showsubtitle: {
    fontSize: 16,
    color: '#85D245',
  },
  titledetails: {
    alignItems: 'center',
    fontWeight: '700',
    width: '100%',
    padding: 59,
  },
  musicimage: {
    height: 292,
    width: '85%',
    alignItems: 'center',
    paddingBottom: 50,
  },
  musicdetails: {
    top: 70,
    alignItems: 'flex-start',
    width: '70%',
    paddingHorizontal: 50,
  },
  musictitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  musicsubtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 5,
  },
  playerbutton: {
    marginTop: 60,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    height: 200,
  },

  playericon: {
    backgroundColor: colortype.blackshadow,
    height: 76,
    width: 76,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top: 30,
    flexDirection: 'row',
  },
  iconplay: {
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 30.5,
    color: '#fff',
  },
  live: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    top: 40,
  },
});
