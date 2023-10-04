import './App.css';
import { useEffect, useState } from "react";
import { Card } from './Components/Card';
import './style.global.css'
import { getWeather } from './FetchData';

const URLEkb: string = `https://api.openweathermap.org/data/2.5/weather?lat=56.838011&lon=60.597474&appid=d299ac739c5bf3d9bc6d5b90766f432b&units=metric&lang=ru`
const URLMsk: string = `https://api.openweathermap.org/data/2.5/weather?lat=55.755819&lon=37.617644&appid=d299ac739c5bf3d9bc6d5b90766f432b&units=metric&lang=ru`

export const App = (): JSX.Element => {
  const [dataEkb, setDataEkb] = useState<any>(null);
  const [dataMsk, setDataMsk] = useState<any>(null);

  useEffect(() => {
    const fetchDataAsync = async (url: string, setData: React.Dispatch<React.SetStateAction<any>>) => {
      const fetchedData = await getWeather(url);
      setData(fetchedData);
    };

    fetchDataAsync(URLEkb, setDataEkb);
    fetchDataAsync(URLMsk, setDataMsk);
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {dataEkb ? <Card data={URLEkb} /> : <p>Loading Ekaterinburg...</p>}
      {dataMsk ? <Card data={URLMsk} /> : <p>Loading Moscow...</p>}
    </div>
  );
}
