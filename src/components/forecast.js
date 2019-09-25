import React from "react";



const Forecast = props => (
  <div className="container">
    <div className="row">
    <div className="col-md-3 col-sm-6">
    {props.city &&
    <div>
  
  <div>Днем ожидается: {props.dayTemp1}</div>
  <div>Ночью ожидается: {props.nightTemp1}</div>
  <div>Днем ожидается: {props.dayTemp2}</div>
  <div>Ночью ожидается: {props.nightTemp2}</div>
  <div>Днем ожидается: {props.dayTemp3}</div>
  <div>Ночью ожидается: {props.nightTemp3}</div>
  
    </div>}  
</div>
</div>
</div>
);



export default Forecast;