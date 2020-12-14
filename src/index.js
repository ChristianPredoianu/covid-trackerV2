import './styles/main.scss';
import CovidData from './covidData';
import Ui from './ui';

//Instantiate CovidData and Ui
const covidData = new CovidData();
const ui = new Ui();

//Initialize app with default world data, countries & filter
function initApp() {
  covidData.getData().then((data) => {
    document.addEventListener('DOMContentLoaded', ui.updateInitialUi(data));
    document.querySelector('.input').addEventListener('keyup', (e) => {
      let search = e.target.value;
      ui.filterData(data, search);
      ui.updateStats(data);
    });
    ui.showData(data);
    ui.updateStats(data);
    console.log(data);
  });
}

initApp();
