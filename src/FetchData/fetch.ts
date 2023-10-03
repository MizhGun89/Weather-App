const token: string = 'd299ac739c5bf3d9bc6d5b90766f432b';

// const getData = async (url: string) => {
//   try {
//     await fetch(url)
//       .then((res) => res.json())
//       .then((data) => data[0])
//       .then((data) => {
//         const latLon: ILatLon = {
//           lat: data.lat,
//           lon: data.lon,
//         };
//         getWeather(latLon);
//       });
//   } catch {
//     console.log(
//       'Произошла ошибка во время получения данных. Проверьте URL и попробуйте снова.'
//     );
//   }
// };

// getData(
//   `http://api.openweathermap.org/geo/1.0/direct?q=Moscow&limit=5&appid=${token}`
// );

// const getWeather = async (obj: ILatLon): Promise<unknown> => {
//   return await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${token}&units=metric&lang=ru`
//   ).then((response) => response.json());
// };

// const getData = async (url: string) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }

//     const data = await response.json();
//     const locationData = data[0];

//     if (!locationData) {
//       throw new Error('Location data is not available.');
//     }

//     const latLon: ILatLon = {
//       lat: locationData.lat,
//       lon: locationData.lon,
//     };

//     const weatherData = await getWeather(latLon);

//     // обработка полученных данных о погоде
//   } catch (error) {
//     console.log(
//       'Произошла ошибка во время получения данных. Проверьте URL и попробуйте снова.',
//       error
//     );
//   }
// };

// const getWeather = async (obj: ILatLon): Promise<IWeather> => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${token}&units=metric&lang=ru`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error('Network response was not ok.');
//   }

//   return response.json();
// };

export const getWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=60.561318&lon=56.841450&appid=${token}&units=metric&lang=ru`;
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      throw new Error(err);
    });
};
