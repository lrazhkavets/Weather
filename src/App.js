import React from "react";
import "./App.css";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Forecast from "./components/forecast";
import Icon from "./components/icon";
import moment from "moment/moment.js";

const apiKey = "ac0462c8f797a1721c5bff58bf35d802";

class App extends React.Component {
  state = {};

  gettingWeather = async event => {
    event.preventDefault();
    var city = event.target.elements.city.value;

    if (city) {
      const result1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const result2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const data1 = await result1.json();
      const data2 = await result2.json();
      console.log(data1);
      console.log(data2);
      let tomorrow = moment()
        .add(1, "days")
        .format("YYYY-MM-DD");
      let firstDay = moment()
        .add(1, "days")
        .format("DD-MMMM");
      let secondDay = moment()
        .add(2, "days")
        .format("DD-MMMM");
      let thirdDay = moment()
        .add(3, "days")
        .format("DD-MMMM");

      let tomorrowBegin = Date.parse(tomorrow) / 1000;

     

      try {
        let a = data2.list.findIndex(x => x.dt === tomorrowBegin);
        this.setState({
          city: data1.name,
          temp: data1.main.temp,
          country: data1.sys.country,
          wind: data1.wind.speed,
          humidity: data1.main.humidity,
          pressure: data1.main.pressure,
          keyIcon: data1.weather[0].icon,
          error: "",
          day1: firstDay,
          dayTemp1: data2.list[a + 5].main.temp,
          nightTemp1: data2.list[a + 1].main.temp,
          day2: secondDay,
          dayTemp2: data2.list[a + 13].main.temp,
          nightTemp2: data2.list[a + 9].main.temp,
          day3: thirdDay,
          dayTemp3: data2.list[a + 21].main.temp,
          nightTemp3: data2.list[a + 17].main.temp
        });
      } catch {
        this.setState({
          error: "Такого города нет, попробуйте еще раз)",
          city: undefined,
          temp: undefined,
          country: undefined,
          wind: undefined,
          humidity: undefined,
          pressure: undefined,
          keyIcon: undefined,
          day1: undefined,
          dayTemp1: undefined,
          nightTemp1: undefined,
          day2: undefined,
          dayTemp2: undefined,
          nightTemp2: undefined,
          day3: undefined,
          dayTemp3: undefined,
          nightTemp3: undefined
        });
      }
    } else {
      this.setState({
        error: "Введите название города",
        city: undefined,
          temp: undefined,
          country: undefined,
          wind: undefined,
          humidity: undefined,
          pressure: undefined,
          keyIcon: undefined,
          day1: undefined,
          dayTemp1: undefined,
          nightTemp1: undefined,
          day2: undefined,
          dayTemp2: undefined,
          nightTemp2: undefined,
          day3: undefined,
          dayTemp3: undefined,
          nightTemp3: undefined
      });
    }
  };

  render() {
    return (
      <div className="grid">
        <Info />
        <Form weatherMethod={this.gettingWeather} />

        <Weather
          city={this.state.city}
          temp={this.state.temp}
          country={this.state.country}
          wind={this.state.wind}
          humidity={this.state.humidity}
          keyIcon={this.state.keyIcon}
          pressure={this.state.pressure}
          error={this.state.error}
        />
        <Icon keyIcon={this.state.keyIcon} />
        <Forecast
          city={this.state.city}
          day1={this.state.day1}
          dayTemp1={this.state.dayTemp1}
          nightTemp1={this.state.nightTemp1}
          day2={this.state.day2}
          dayTemp2={this.state.dayTemp2}
          nightTemp2={this.state.nightTemp2}
          day3={this.state.day3}
          dayTemp3={this.state.dayTemp3}
          nightTemp3={this.state.nightTemp3}
        />
      </div>
    );
  }
}

export default App;
