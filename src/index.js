import './styles/main.scss';
import CovidData from './covidData';
import Ui from './ui';

//Instantiate CovidData and Ui
const covidData = new CovidData();
const ui = new Ui();

//Initialize app with default world data. Show country cards, filter, update
function initApp() {
  covidData.getData().then((data) => {
    document.addEventListener('DOMContentLoaded', ui.updateInitialUi(data));
    ui.showCountryCards(data);
    ui.filterCountryCards(data);
    ui.updateStats(data);
  });
}

initApp();
