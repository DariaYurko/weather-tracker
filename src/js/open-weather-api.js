import myAxios from 'axios';

export function fetchWeather(city) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/current.json';

  const params = new URLSearchParams({
    key: 'e71f790f85814563a0094958243006',
    q: city,
  });

  // const headers = {
  //   'x-rapidapi-key': '794805e6fbmsh351591e262dc11ap1e8c3cjsn1f2eef6db9c4',
  //   'x-rapidapi-host': 'the-weather-api.p.rapidapi.com',
  // };

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const data = fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));


  return data;
}

