export function getMarkup(data) {
  return `<article class="weather-card">
            <div class="weather-card__deg">${data.current.temp_c}&deg; C</div>
            <div class="weather-card__city">${data.location.name}</div>
            <img src="${data.current.condition.icon}">
         </article>`;
}
