import React from 'react';
import { IWheatherData } from '../../FetchData';
import styles from './card.module.css';
import { Icon, IconType } from '../Icons';

interface IWeatherComponentProps {
  data: IWheatherData;
}

const mapWeatherToIcon = (weather: string): IconType => {
  switch (weather) {
    case 'Thunderstorm':
    case 'Drizzle':
    case 'Rain':
      return IconType.Rain;
    case 'Snow':
      return IconType.Snow;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
    case 'Clouds':
      return IconType.Clouds;
    case 'Clear':
      return IconType.Clear;
    default:
      return IconType.Clouds;
  }
};

// const formatUtcDate = (utcDate: number): string => {
//   const date = new Date(utcDate * 1000);
//   const options = { day: 'numeric', month: 'long' };
//   const formattedDate = date.toLocaleDateString('ru-RU', options);

//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
//     .toString()
//     .padStart(2, '0')}`;

//   return `${formattedDate}, ${formattedTime}`;
// };

export const Card = ({ data }: IWeatherComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const city = data.name;
  const weatherNow = data.main?.temp;
  const cloud = data.weather[0].description;
  const iconId = data.weather[0].main;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const cardWidth = isOpen ? styles.cardL : styles.cardS;

  return (
    <div className={`${styles.card} ${cardWidth}`} onClick={handleClick}>
      <p className={styles.city}>
        {city === 'Posëlok Rabochiy' ? 'Екатеринбург' : city}
      </p>
      <div className={styles.tempBox}>
        <p className={styles.temp}>
          {Math.round(Number(JSON.stringify(weatherNow)))}
        </p>
        <span>°С</span>
      </div>
      <Icon icon={mapWeatherToIcon(iconId)} />
      <p className={styles.cloud}>{cloud}</p>
      {/* <p>Data: {JSON.stringify(data)}</p> */}
    </div>
  );
};
