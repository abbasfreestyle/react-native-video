import React, { createContext, ReactNode, useContext, useState } from 'react';

type IVideoProvider = {
  display: boolean;
  play: boolean;
  toggleDisplay: () => void;
  togglePlay: () => void;
};

const noop = () => {
  // do nothing;
};

/* istanbul ignore next */
const initialState: IVideoProvider = {
  display: false,
  play: false,
  toggleDisplay: noop,
  togglePlay: noop,
};

const VideoContext = createContext<IVideoProvider>(initialState);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const value = useVideoProvider();
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideoProvider = () => {
  const [play, setPlay] = useState(false);
  const [display, setDisplay] = useState(false);

  const togglePlay = () => {
    setPlay((prev) => !prev);
  };

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return {
    display,
    play,
    togglePlay,
    toggleDisplay,
  };
};

export const useVideo = () => useContext(VideoContext);
