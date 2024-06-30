import { fetchWeather } from './open-weather-api';
import { getMarkup } from './render-functions'

const formEl = document.querySelector('.search-form');
const infoContainerEl = document.querySelector('.info__container');

formEl.addEventListener('submit', event => {
   event.preventDefault();
   
   const queryCity = event.target.elements.city.value.trim()

  fetchWeather(queryCity)
    .then(data => {
      const markup = getMarkup(data);
      infoContainerEl.innerHTML = markup;
      console.log(data);
    })
    .catch(err => console.log(err));
});


