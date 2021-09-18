import React, { createContext, ReactNode, useContext, useState } from 'react';

type IVideoProvider = {
  play: boolean;
  togglePlay: VoidFunction;
};

const initialState: IVideoProvider = {
  play: false,
  togglePlay: () => undefined,
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

/* 
Logo
show/hide (component)

Title
show/hide (component)

Menu
show/hide (component)

Play
play: boolean
onPress => toggle()

FF
onDoublePress => fastForward()

RWD
onDoublePress => rewind()

Progress
progress ({ time, number })
onProgress => onProgress(progress: number)

Volume
volume
onVolume => onVolume(volume: number)

Fullscreen
fullScreen: boolean
onFullScreen => onFullScreen(value: boolean)

Error
error: ?
onErrorDismiss => onErrorDismiss

Overlay
Start -> show
if play -> hide after 3 seconds
on tap -> toggle
on action -> reset 3 second dismiss
End -> show
*/
