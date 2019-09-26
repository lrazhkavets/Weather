import React from "react";

const Forecast = props => (
  <div className="container-forecast">
   
      
        {props.city && (
          <div className="container-in-forecast">
            <div className="col-1">
              
              {props.day1}
              <div>Днем : {props.dayTemp1} </div>
              <div>Ночью : {props.nightTemp1}</div>
            </div>
            <div className="col-2">
             
              {props.day2}
              <div>Днем : {props.dayTemp2}</div>
              <div>Ночью : {props.nightTemp2}</div>
            </div>
            <div className="col-3">
             
              {props.day3}
              <div>Днем : {props.dayTemp3}</div>
              <div>Ночью : {props.nightTemp3}</div>
            </div>
          </div>
        )}
      
   
  </div>
);

export default Forecast;
