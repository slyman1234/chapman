import React, {createContext, useRef, useState} from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
  const videoPlayerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <VideoContext.Provider value={{videoPlayerRef, isPaused, setIsPaused}}>
      {children}
    </VideoContext.Provider>
  );
};
