import React from 'react';
import {
  IconCloudy,
  IconCloudMoon,
  IconCloudyLight,
  IconNight,
  IconCloudyRainLight,
  IconRainy,
  IconSnow,
  IconSunny,
} from './Icons';

export enum IconType {
  Clouds = 'clouds',
  CloudMoon = 'cloudMoon',
  CloudyLight = 'cloudyLight',
  Night = 'night',
  CloudyRainLight = 'cloudyRainLight',
  Rain = 'rain',
  Snow = 'snow',
  Clear = 'clear',
}

interface IconProps {
  icon: IconType;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case IconType.Clouds:
      return <IconCloudy />;
    case IconType.CloudMoon:
      return <IconCloudMoon />;
    case IconType.CloudyLight:
      return <IconCloudyLight />;
    case IconType.Night:
      return <IconNight />;
    case IconType.CloudyRainLight:
      return <IconCloudyRainLight />;
    case IconType.Rain:
      return <IconRainy />;
    case IconType.Snow:
      return <IconSnow />;
    case IconType.Clear:
      return <IconSunny />;
    default:
      return null;
  }
};
