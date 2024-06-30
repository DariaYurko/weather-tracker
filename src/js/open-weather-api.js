//https://www.weatherapi.com/docs/

import myAxios from 'axios';

export function fetchWeather(city) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/current.json';

  const params = new URLSearchParams({
    key: 'e71f790f85814563a0094958243006',
    q: city,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const data = fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));

  return data;
}
