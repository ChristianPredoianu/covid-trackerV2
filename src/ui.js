export default class Ui {
  constructor() {
    this.statsCountry = document.querySelector('#stats-country');
    this.totalCases = document.querySelector('#total-cases');
    this.totalRecovered = document.querySelector('#total-recovered');
    this.totalDeaths = document.querySelector('#total-deaths');
    this.casesToday = document.querySelector('#cases-today');
    this.deathsToday = document.querySelector('#deaths-today');
    this.intensiveCare = document.querySelector('#intensive-care');
    this.casesPerMil = document.querySelector('#cases-mil');
    this.deathsPerMil = document.querySelector('#deaths-mil');
    this.activeCases = document.querySelector('#active-cases');
    this.containerCountries = document.querySelector('.container-countries');
  }

  //Update initial Ui
  updateInitialUi(data) {
    this.statsCountry.textContent = data[0].country;
    this.totalCases.textContent = this.formatNumbers(data[0].cases);
    this.totalRecovered.textContent = this.formatNumbers(data[0].recovered);
    this.totalDeaths.textContent = this.formatNumbers(data[0].deaths);
    this.casesToday.textContent = this.formatNumbers(data[0].todayCases);
    this.deathsToday.textContent = this.formatNumbers(data[0].todayDeaths);
    this.intensiveCare.textContent = this.formatNumbers(data[0].critical);
    this.casesPerMil.textContent = this.formatNumbers(
      data[0].casesPerOneMillion
    );
    this.deathsPerMil.textContent = this.formatNumbers(
      data[0].deathsPerOneMillion
    );
    this.activeCases.textContent = this.formatNumbers(data[0].active);
  }

  //Create the country card
  createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('country-card');
    this.containerCountries.appendChild(card);
    const img = document.createElement('IMG');
    img.classList.add('country-card__img');
    this.setImgSrc(country, img);
    card.appendChild(img);
    const paragraph = document.createElement('p');
    paragraph.classList.add('country-card__paragraph');
    paragraph.textContent = country.country;
    card.appendChild(paragraph);
  }

  //Set the img src for country card - No flags avaliable for countries in if statement - default flag World
  setImgSrc(country, img) {
    if (
      country.country === 'World' ||
      country.country === 'Guadeloupe' ||
      country.country === 'Réunion' ||
      country.country === 'Mayotte' ||
      country.country === 'Channel Islands' ||
      country.country === 'Diamond Princess' ||
      country.country === 'Caribbean Netherlands' ||
      country.country === 'New Caledonia' ||
      country.country === 'Saint Pierre Miquelon' ||
      country.country === 'Wallis and Futuna' ||
      country.country === 'MS Zaandam' ||
      country.country === 'Saint Helena'
    ) {
      img.src = `img/src/images/world.png`;
    } else {
      img.src = `img/src/images/flags/${country.country}.svg`;
    }
  }

  //Show all countries
  showCountryCards(data) {
    data.forEach((country) => {
      this.createCountryCard(country);
    });
  }

  //Show filtered countries
  filterCountryCards(data) {
    document.querySelector('.input').addEventListener('keyup', (e) => {
      const search = e.target.value;
      this.containerCountries.innerHTML = '';
      const filtered = data.filter((country) => {
        return country.country.toLowerCase().includes(search.toLowerCase());
      });
      this.showFilteredCountryCards(filtered);
    });
  }

  //Show filtered country cards
  showFilteredCountryCards(filtered) {
    filtered.forEach((country) => {
      this.createCountryCard(country);
    });
  }

  //Update stats for clicked country
  updateStats(data) {
    this.containerCountries.addEventListener('click', (e) => {
      if (
        e.target.className === 'country-card' ||
        e.target.className === 'country-card__img' ||
        e.target.className === 'country-card__paragraph'
      ) {
        data.find((country) => {
          if (e.target.textContent === country.country) {
            this.updateMainStats(country);
            this.updateAdditionalStats(country);
          }
        });
      }
    });
  }

  updateMainStats(country) {
    this.statsCountry.textContent = country.country;
    this.totalCases.textContent = this.formatNumbers(country.cases);
    this.totalRecovered.textContent = this.formatNumbers(country.recovered);
    this.totalDeaths.textContent = this.formatNumbers(country.deaths);
  }

  updateAdditionalStats(country) {
    this.casesToday.textContent = this.formatNumbers(country.todayCases);
    this.deathsToday.textContent = this.formatNumbers(country.todayDeaths);
    this.intensiveCare.textContent = this.formatNumbers(country.critical);
    this.casesPerMil.textContent = this.formatNumbers(
      country.casesPerOneMillion
    );
    this.deathsPerMil.textContent = this.formatNumbers(
      country.deathsPerOneMillion
    );
    this.activeCases.textContent = this.formatNumbers(country.active);
  }

  //Format data with commas
  formatNumbers(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
