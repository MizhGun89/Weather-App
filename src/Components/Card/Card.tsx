import styles from './card.module.css';

const formatUtcDate = (utcDate: number): string => {
  const date = new Date(utcDate * 1000);
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return `${formattedDate}, ${formattedTime}`;
};

export const Card = ({ data }: any): JSX.Element => {
  console.log(data)

  const city: string = data.name !== undefined ? data.name : '123'
  const weatherNow: string = data.main.temp !== undefined ? data.main.temp : '123'
  const cloud: string = data.weather[0].description !== undefined ? data.weather[0].description : '123'
  //Для почасовому
  // data.list.forEach(item => {
  //   console.log(formatUtcDate(item.dt) + ' ' + item.main.temp)
  // });


  return (
    <div className={styles.card}>
      <h2>{city}</h2>
      <p>{Math.round(Number(JSON.stringify(weatherNow)))} °С</p>
      <p>{JSON.stringify(cloud)}</p>
      {/* <p>Data: {JSON.stringify(data)}</p> */}
    </div>
  );
};