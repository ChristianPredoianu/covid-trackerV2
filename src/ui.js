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
    this.input = document.querySelector('.wrapper__input');
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
  }
  //Create top ten country cards
  createCountryCards(data) {
    const wrapper = document.querySelector('#wrapper');
    const countries = data.slice(0, 10);

    countries.forEach((country) => {
      const card = document.createElement('div');
      card.classList.add('wrapper__country-box');
      wrapper.appendChild(card);
      const img = document.createElement('IMG');
      img.classList.add('wrapper__country-img');
      img.src = 'img/src/images/united-states-of-america.svg';
      card.appendChild(img);
      const paragraph = document.createElement('p');
      paragraph.classList.add('wrapper__country-paragraph');
      paragraph.textContent = country.country;
      card.appendChild(paragraph);
    });
  }
  filterCountries(data) {
    this.input.addEventListener('keyup', (e) => {
      console.log(e.target.value);

      let filteredCountries = data.filter((country) => {
        return country.country.toLowerCase() === e.target.value.toLowerCase();
      });

      let found = filteredCountries;

      if (found.length > 0) {
        const card = document.createElement('div');
        card.classList.add('wrapper__country-box');
        wrapper.appendChild(card);
        const img = document.createElement('IMG');
        img.classList.add('wrapper__country-img');
        img.src = 'img/src/images/united-states-of-america.svg';
        card.appendChild(img);
        const paragraph = document.createElement('p');
        paragraph.classList.add('wrapper__country-paragraph');
        paragraph.textContent = found[0].country;
        card.appendChild(paragraph);
        console.log(found);
      }
    });
  }

  //Format data with commas
  formatNumbers(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
