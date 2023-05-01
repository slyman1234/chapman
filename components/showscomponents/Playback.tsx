import TrackPlayer, {Event} from 'react-native-track-player';

export async function playbackService() {
  // TODO: Attach remote event handlers

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log('Event.RemotePlay');
    TrackPlayer.play();
  });
}
