const token: string = 'd299ac739c5bf3d9bc6d5b90766f432b';
// Ekb 56.838011, 60.597474
// Msk 55.755819, 37.617644
const lat: string = '56.838011'
const lon: string = '60.597474'
const cnt: string = '16'

export const getWeather = async (url: string): Promise<any> => {
  // const url1: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=ru`;
  // const url2: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=ru`;
  return await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};
