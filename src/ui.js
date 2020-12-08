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
    this.wrapper = document.querySelector('#wrapper');
    this.wrapperInner = document.querySelector('.wrapper__inner');
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

  //Show all countries
  showData(data) {
    console.log(data);
    data.forEach((country) => {
      this.createCard(country);
    });
  }

  //Show filtered countries
  filterData(data, search) {
    this.wrapperInner.innerHTML = '';
    let filtered = data.filter((country) => {
      return country.country.toLowerCase().includes(search.toLowerCase());
    });
    filtered.forEach((country) => {
      this.createCard(country);
    });
  }

  //Create the country card
  createCard(country) {
    let addData = {};
    let id = 0;
    const card = document.createElement('div');
    card.classList.add('wrapper__country-box');
    this.wrapperInner.appendChild(card);
    const img = document.createElement('IMG');
    img.classList.add('wrapper__country-img');
    if (country.country === 'World') {
      img.src = `../dist/img/src/images/World.png`;
    } else {
      img.src = `../dist/img/src/images/flags/${country.country}.svg`;
    }
    card.appendChild(img);
    const paragraph = document.createElement('p');
    paragraph.classList.add('wrapper__country-paragraph');
    paragraph.textContent = country.country;
    card.appendChild(paragraph);

    /*  addData = {
      country: country.country,
    }; */
    console.log(addData);
  }

  //Update stats for clicked country
  updateStats(data) {
    this.wrapper.addEventListener('click', (e) => {
      if (
        e.target.className === 'wrapper__country-paragraph' ||
        e.target.className === 'wrapper__country-img'
      ) {
        data.forEach((country) => {
          console.log(e.target);
          if (e.target.textContent === country.country) {
            this.statsCountry.textContent = this.formatNumbers(country.country);
            this.totalCases.textContent = this.formatNumbers(country.cases);
            if (country.recovered !== null) {
              this.totalRecovered.textContent = this.formatNumbers(
                country.recovered
              );
            } else {
              this.totalRecovered.textContent = 'Unknown';
            }
            this.totalDeaths.textContent = this.formatNumbers(country.deaths);
          }
        });
      }
    });
  }

  //Format data with commas
  formatNumbers(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
