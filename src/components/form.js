import React from "react";



const Form = props =>(
    <form onSubmit={props.weatherMethod} className = "container-form" >
        <input type="text" name="city" placeholder="City" />
        <button>Получить погоду</button>
    </form>);

export default Form;