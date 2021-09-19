import React, { createContext, ReactNode, useContext, useState } from 'react';

type IVideoProvider = {
  play: boolean;
  togglePlay: () => void;
};

/* istanbul ignore next */
const initialState: IVideoProvider = {
  play: false,
  togglePlay: () => {
    // do nothing
  },
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

  const togglePlay = () => {
    setPlay((prev) => !prev);
  };

  return {
    play,
    togglePlay,
  };
};

export const useVideo = () => {
  const { play, togglePlay } = useContext(VideoContext);

  return {
    play,
    togglePlay,
  };
};
