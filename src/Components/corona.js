import React from "react";

import Cards from "../Components/Cards/Cards";
import Chart from "./Charts/Chart";
import CountryPicker from "../Components/CountryPicker/CountryPicker";
import { fetchData } from "../apiforcorna/index";
import styles from "../../src/Components/corona.module.css";

import image from "../../src/image.png";

class Corona extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default Corona;
