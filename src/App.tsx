import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './Components/Card';
import './style.global.css';
import { getWeather, IWheatherData } from './FetchData';
import { AxiosResponse } from 'axios';

export const App = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<IWheatherData | null>(null);
  // const [dataMsk, setDataMsk] = useState<any>(null);

  useEffect(() => {
    getWeather
      .then((res: AxiosResponse<IWheatherData, unknown>) => {
        console.log(res);

        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData ? (
        <Card data={weatherData} />
      ) : (
        <p>Loading Ekaterinburg...</p>
      )}
      {/* {dataMsk ? <Card data={URLMsk} /> : <p>Loading Moscow...</p>} */}
    </div>
  );
};
