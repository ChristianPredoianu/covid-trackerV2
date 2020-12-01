export default class CovidData {
  async getCountries() {
    const response = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries`
    );
    const data = await response.json();
    return data;
  }

  getWorld() {
    this.getCountries().then((data) => {
      console.log(data);
    });
  }
}
