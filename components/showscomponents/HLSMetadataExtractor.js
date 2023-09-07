import React, { useRef, useEffect } from 'react';
import Video from 'react-native-video';
import streamsurl from '../../constant/hls';

const HLSMetadataExtractor = ({ onMetadataExtracted }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setOnTimedMetadata((metadata) => {
        // Here, you can process the metadata or pass it to React Native Track Player
        console.log('Timed metadata:', metadata);
        // Pass metadata to the parent component for further processing
        onMetadataExtracted(metadata);
      });
    }
  }, []);

  return (
    <Video
      ref={videoRef}
      source={{ uri: streamsurl.student }}
      style={{ width: 0, height: 0 }} // Set width and height to 0 to hide the video player
      controls={false}
    />
  );
};

export default HLSMetadataExtractor;