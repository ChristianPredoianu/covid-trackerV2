import './styles/main.scss';
import CovidData from './covidData';
import Ui from './ui';

//Instantiate CovidData and Ui
const covidData = new CovidData();
const ui = new Ui();

//Initialize app with default world data
function initApp() {
  covidData.getData().then((data) => {
    document.addEventListener('DOMContentLoaded', ui.updateInitialUi(data));
    ui.createCountryCards(data);
    const input = document.querySelector('.wrapper__input');
    ui.filterCountries(data);
    console.log(data);
  });
}

initApp();
