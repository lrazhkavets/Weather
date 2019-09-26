import React from "react";

const Icon = props => {
  return (
    <img src={`http://openweathermap.org/img/w/${props.keyIcon}.png`} width="150" height="150" alt=""  className = "container-icon" />
  );
};

export default Icon;
