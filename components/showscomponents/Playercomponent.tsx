import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import streamsurl from '../../constant/hls';
import {addTracks} from './Tracks';
import Artworkurl from '../../assets/radiohead.png';

const tracktitle = 'Student Stream';

export const setup = async (setIsPlayerReady) => {

  try {
    let isSetup = await setupPlayer();

    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      const trackData = await TrackPlayer.getTrack(currentTrack);

      if (isSetup && (!trackData || trackData.url !== streamsurl.student)) {
        await TrackPlayer.reset();
      } else {
        getCurrentTrack();
      }
    } else {
      // Handle the case when the current track is null
      // Add a new track with the given title and URL
      await addTracks('Student Stream', streamsurl.student, 'hls');
    }

    const queue = await TrackPlayer.getQueue();
    if (isSetup && queue.length <= 0) {
      await addTracks('Student Stream', streamsurl.student, 'hls');
      getCurrentTrack();
    }
    setIsPlayerReady(isSetup);
  } catch (error) {
    console.log(error);
  }
};


export async function getCurrentTrack() {
  const currentTrack1 = await TrackPlayer.getCurrentTrack();
  await TrackPlayer.updateMetadataForTrack(currentTrack1, {
    title: tracktitle,
    artwork: Artworkurl,
  });
  console.log(Artworkurl);
}

export async function handlePlayPress() {
  if ((await TrackPlayer.getState()) === State.Playing) {
    TrackPlayer.pause();
  } else {
    TrackPlayer.play();
    getCurrentTrack();
  }
}
