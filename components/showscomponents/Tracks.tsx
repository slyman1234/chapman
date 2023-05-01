import TrackPlayer, {RepeatMode} from 'react-native-track-player';

export async function addTracks(id: any, url: any, type: any) {
  await TrackPlayer.add([
    {
      id: id,
      url: url,
      type: type,
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
