import React from "react";






const Weather = props => {
  
  return (

      <div className="container-weather">
        {props.city &&
          <div >
                <p>Место: {props.city}, {props.country}</p>
                <p>Температура: {props.temp} </p>
                <p>Ветер: {props.wind} м/с</p>
                <p>Влажность: {props.humidity} %</p>
                <p>Давление: {props.pressure}</p>
                
           </div>  
        }
    <p>{props.error}</p>
    </div>
  )};

export default Weather;

