import FastForward from '../../assets/fast-forward.svg';
import Mute from '../../assets/mute.svg';
import Pause from '../../assets/pause.svg';
import Play from '../../assets/play.svg';
import Rewind from '../../assets/rewind.svg';
import Sound from '../../assets/sound.svg';

export const svgIcons = {
  FastForward,
  Mute,
  Pause,
  Play,
  Rewind,
  Sound,
};

export type SvgAssets = keyof typeof svgIcons;
