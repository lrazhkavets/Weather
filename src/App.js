import React from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import Forecast from './components/forecast';
import Icon from './components/icon';
import Flag from './components/flag';
import moment from 'moment/moment.js'
// import './bootstrap.min.css'


const apiKey = "ac0462c8f797a1721c5bff58bf35d802";

class App extends React.Component {

  state = {
       
  }


  gettingWeather = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

    
   if(city) {
    const result1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const result2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const data1 = await result1.json();
    const data2 = await result2.json();
    console.log(data1);
    console.log(data2);
       let tomorrow = moment().add(1, 'days').format("YYYY-MM-DD");
    
    
    let tomorrowBegin = (Date.parse(tomorrow))/1000;
    
    let a = data2.list.findIndex(x => x.dt === tomorrowBegin);
    

   console.log(a);

    try {
     
   this.setState({
    city: data1.name,
    temp: data1.main.temp,
    country: data1.sys.country,
    wind: data1.wind.speed,
    humidity: data1.main.humidity,
    pressure: data1.main.pressure,
    keyIcon: data1.weather[0].icon,
    error: "",
    dayTemp1:data2.list[a+5].main.temp,
    nightTemp1:data2.list[a+1].main.temp,
    dayTemp2:data2.list[a+13].main.temp,
    nightTemp2:data2.list[a+9].main.temp,
    dayTemp3:data2.list[a+21].main.temp,
    nightTemp3:data2.list[a+17].main.temp,
      

   });
  }  catch { 
    this.setState({
           error: "Такого города нет, попробуйте еще раз)",
             });
  }
}
  else {
    this.setState({
       error: "Введите название города",
         });
  }
  
} 

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}
           />
           
        <Weather 
        city={ this.state.city}
        temp={ this.state.temp}
        country={ this.state.country}
        wind= { this.state.wind}
        humidity={ this.state.humidity}
        keyIcon={ this.state.keyIcon}
        pressure={ this.state.pressure}
        error={ this.state.error}
              />
        <Icon className="right-column"
         keyIcon={ this.state.keyIcon}/>
        <Forecast 
        city={ this.state.city}
        dayTemp1={ this.state.dayTemp1}
        nightTemp1={ this.state.nightTemp1}
        dayTemp2={ this.state.dayTemp2}
        nightTemp2={ this.state.nightTemp2}
        dayTemp3={ this.state.dayTemp3}
        nightTemp3={ this.state.nightTemp3}
       
                />
        <Flag 
         country={ this.state.country}/>
      </div>
    )
  }
}

export default App;
 
