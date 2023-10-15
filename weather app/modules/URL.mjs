const cities = {
  Taipei: { lat: "25.023490760084535", lon: "121.54501826997316" },
  NewYork: { lat: "40.735734837489495", lon: "-73.99187797754203" },
  Paris: { lat: "48.83804043014391", lon: "2.2965639775575033" },
  Tokyo: { lat: "35.71117846717539", lon: "139.7585749381366" },
  Sydney: { lat: "-33.87548157935858", lon: "151.21412370606936" },
};
export const key = "3e676422cf646c9e43f947db29536190";
export let Taipei = `https://api.openweathermap.org/data/2.5/weather?lat=${cities.Taipei.lat}&lon=${cities.Taipei.lon}&appid=${key}&units=metric&lang=zh_tw`;
export let NewYork = `https://api.openweathermap.org/data/2.5/weather?lat=${cities.NewYork.lat}&lon=${cities.NewYork.lon}&appid=${key}&units=metric&lang=zh_tw`;
export let Paris = `https://api.openweathermap.org/data/2.5/weather?lat=${cities.Paris.lat}&lon=${cities.Paris.lon}&appid=${key}&units=metric&lang=zh_tw`;
export let Tokyo = `https://api.openweathermap.org/data/2.5/weather?lat=${cities.Tokyo.lat}&lon=${cities.Tokyo.lon}&appid=${key}&units=metric&lang=zh_tw`;
export let Sydney = `https://api.openweathermap.org/data/2.5/weather?lat=${cities.Sydney.lat}&lon=${cities.Sydney.lon}&appid=${key}&units=metric&lang=zh_tw`;
