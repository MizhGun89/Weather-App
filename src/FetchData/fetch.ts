// Ekb 56.838011, 60.597474
// const cnt: string = '16';
// Msk 55.755819, 37.617644

import axios, { AxiosResponse } from 'axios';

export interface IWheatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const token: string = 'd299ac739c5bf3d9bc6d5b90766f432b';
const lat: string = '56.838011';
const lon: string = '60.597474';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const getWeather: Promise<AxiosResponse<IWheatherData, unknown>> =
  api.get('/weather', {
    params: {
      appid: token,
      lat: lat,
      lon: lon,
      units: 'metric',
      lang: 'ru',
    },
  });

// export const getWeather = async (url: string): Promise<any> => {
//   // const url1: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=ru`;
//   // const url2: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=ru`;
//   return await fetch(url)
//     .then((res) => res.json())
//     .catch((err) => {
//       throw new Error(err);
//     });
// };
