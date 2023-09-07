import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  SafeAreaView,
  AppState,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Feather} from '@expo/vector-icons';
import colortype from '../../../constant/colors';
import streamsurl from '../../../constant/hls';
import TrackPlayer, {
  usePlaybackState,
  State,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {setupPlayer} from '../Player';
import {addTracks} from '../Tracks';
import LottieView from 'lottie-react-native';
import {Assets} from '../../../api/Apis';
import Artworkurl from '../../../assets/radiohead.png';


const Studentuniondetails = () => {
  const playerState = usePlaybackState();

  const [appState, setAppState] = useState(AppState.currentState);
  const lottieAnimationRef = useRef(null);


  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (
        appState.match(/inactive|background/) &&
        nextAppState === 'active' &&
        lottieAnimationRef.current
      ) {
        lottieAnimationRef.current.play();
      }
      setAppState(nextAppState);
    };

    const appStateListener = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateListener.remove();
    };
  }, [appState]);

  const [isPlayerReady, setIsPlayerReady] = useState<Boolean>(false);

  const tracktitle = 'Student Union';

  useEffect(() => {
    setup();
  }, []);

  async function getCurrentTrack() {
    const currentTrack1: any = await TrackPlayer.getCurrentTrack();

    console.log(currentTrack1);
    await TrackPlayer.updateMetadataForTrack(currentTrack1, {
      title: tracktitle,
      artwork: Artworkurl,
    });
    console.log(Artworkurl);
  }

  const setup = async () => {
    try {
      let isSetup = await setupPlayer();

      const currentTrack = await TrackPlayer.getCurrentTrack();

      if (currentTrack !== null) {
        const trackData = await TrackPlayer.getTrack(currentTrack);

        if (
          isSetup &&
          (!trackData || trackData.url !== streamsurl.studentunion)
        ) {
          await TrackPlayer.reset();
        } else {
          getCurrentTrack();
        }
      } else {
        // Handle the case when the current track is null
        // Add a new track with the given title and URL
        await addTracks('Student Union', streamsurl.studentunion, 'hls');
      }

      const queue = await TrackPlayer.getQueue();

      if (isSetup && queue.length <= 0) {
        await addTracks('Student Union', streamsurl.studentunion, 'hls');
        getCurrentTrack();
      }
      setIsPlayerReady(isSetup);
    } catch (error) {
      console.log(error);
    }
  };

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
      getCurrentTrack();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titledetails} accessible={true}>
        <Text style={styles.showname}>Student Union Stream</Text>
        <Text style={styles.showsubtitle}>Stream 3 </Text>
      </View>

      <LottieView
        loop
        autoPlay
        source={Assets.lottieFiles.planePath}
        style={styles.musicimage}
        ref={lottieAnimationRef}
      />

      {playerState === State.Playing ? (
        <TouchableHighlight onPress={handlePlayPress} style={styles.playericon}>
          {/* Your stop button component */}
          <Feather name="pause" style={styles.iconpause} />
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

export default Studentuniondetails;

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
  iconpause: {
    alignSelf: 'center',
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
