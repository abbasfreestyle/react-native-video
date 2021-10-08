import React, { createContext, ReactNode, useContext, useState } from 'react';

export type VideoContextProps = {
  display: boolean;
  play: boolean;
  toggleDisplay: () => void;
  togglePlay: () => void;
};

/* istanbul ignore next */
const noop = () => {
  // do nothing;
};

const initialState: VideoContextProps = {
  display: false,
  play: false,
  toggleDisplay: noop,
  togglePlay: noop,
};

const VideoContext = createContext<VideoContextProps>(initialState);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const value = useVideoProvider();
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export const MockVideoProvider = ({
  children,
  mockedValue,
}: Partial<VideoContextProps> & {
  children: ReactNode;
  mockedValue: Partial<VideoContextProps>;
}) => {
  const value = useVideoProvider();
  return (
    <VideoContext.Provider value={{ ...value, ...mockedValue }}>
      {children}
    </VideoContext.Provider>
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
