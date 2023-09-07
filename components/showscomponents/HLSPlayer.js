import React, { useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import HLSMetadataExtractor from './HLSMetadataExtractor';

import Studentshowdetail from './studentshows/Studentshowdetail';
import streamsurl from '../../constant/hls';

const HLSPlayer = () => {
  const [metadata, setMetadata] = useState(null);

  // Function to handle metadata extraction
  const handleMetadataExtracted = (metadata) => {
    setMetadata(metadata);
  };

  // Function to play audio with received metadata
  const playWithMetadata = () => {
    // Assuming you have an audio track URI for the HLS stream
    const audioTrack = {
      id: 'hls_audio_track',
      url: streamsurl.student,
      title: 'Audio Track Title',
      artist: 'Artist Name',
      // Add other necessary track data as needed
    };

    // Update track metadata with the received metadata
    audioTrack.metadata = metadata;

    // Add the track and play it
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.add([audioTrack]).then(() => {
        TrackPlayer.play();
      });
    });
  };

  return (
    <>
      <HLSMetadataExtractor onMetadataExtracted={handleMetadataExtracted} />
      <Studentshowdetail metadata={metadata} onPlay={playWithMetadata} />
    </>
  );
};

export default HLSPlayer;
