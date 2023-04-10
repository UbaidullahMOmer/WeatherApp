import React, { useState } from "react";
// import axios from "axios";

function App() {
  const countries = [
    { name: "Pakistan", value: "pk", cities: ["Karachi", "Lahore"] },
    { name: "India", value: "in", cities: ["Mumbai", "Dehli"] },
    { name: "Bangladash", value: "bg", cities: ["Dhaka", "Chittagong"] },
  ];
  // const [country, setCountry] = useState()
  return (
    <div className="app">
      <h1>Ubaidullah</h1>
      <select style={{border: "6px solid #0091ff", fontSize:"50px", margin: "10px", borderRadius:"5px", color: "#0091ff"}} name="cars">
        {countries.map((item) => (
          <option value="{item.value}">{item.name}</option>

        ))}
      </select>
      <select style={{border: "6px solid #0091ff", fontSize:"50px", margin: "10px", borderRadius:"5px", color: "#0091ff"}} name="cars">
        {
          countries[0].cities.map((item) => (
            <option>{item}</option>
          ))}
      </select>
      
    </div>
  );
}

export default App;
