import './App.css';
import { getWeather } from './FetchData';

function App() {
  getWeather();
  return <h1>Погода</h1>;
}

export default App;
