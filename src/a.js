import React, { useState } from "react";
import axios from "axios";

function App() {
  const countries = [
    { name: "Pakistan", value: "pk", cities: ["Karachi", "Lahore"] },
    { name: "India", value: "ind", cities: ["Mumbai", "Dehli"] },
    { name: "Bangladash", value: "bg", cities: ["Dhaka", "Chittagong"] },
  ];
  const [countryv, setCountryv] = useState()
  let pk = 0;
  let ind = 1;
  let bg = 2;
  return (
    <div className="app">
      <h1>Ubaidullah</h1>
      <select 
      style={{
      border: "6px solid #0091ff", 
      fontSize:"50px", margin: "10px", 
      borderRadius:"5px", color: "#0091ff"}} 
      name="Countries" 
      onchange={setCountryv(this.value)}
      >
      <option value="Choose" selected="selected">Choose</option>
        {countries.map((item) => (
          <option value="{item.value}">{item.name}</option>
        ) )
        }
      </select>


      <select 
      style={
        {
        border: "6px solid #0091ff", 
        fontSize:"50px", margin: "10px", 
        borderRadius:"5px", color: "#0091ff"
      }} 
      name="Cities">
      <option value="Choose" selected="selected">Choose</option>
        {
          if (countryv === pk){
            countries[0].cities.map((item) => (
              <option>{item}</option>
            ))
          }
          else if(countryv === ind){
            countries[1].cities.map((item) => (
              <option>{item}</option>
            ))
          }
          else if(countryv === bg){
            countries[2].cities.map((item) => (
              <option>{item}</option>
            ))
          }
        }
      </select>
      
    </div>
  );
}

export default App;
