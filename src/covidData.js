//Export and get data from API
export default class CovidData {
  async getData() {
    const response = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries`
    );
    const data = await response.json();
    return data;
  }
}
