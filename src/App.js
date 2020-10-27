import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import COVID19 from "./images/coronavirus.jpg";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.img} src={COVID19} alt="COVID19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer>
          Built with{" "}
          <span style={{ color: "red", fontSize: "20px" }}>&hearts; </span>, by{" "}
          <a target="_blank" href="https://www.linkedin.com/in/monu-kumar/">
           Monu Kumar
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
