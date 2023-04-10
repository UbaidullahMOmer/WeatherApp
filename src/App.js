import React, {useState} from "react";

function App() {
  const countries = [
    { name: "Pakistan", value: "pk", cities: ["Karachi", "Lahore"] },
    { name: "India", value: "ind", cities: ["Mumbai", "Dehli"] },
    { name: "Bangladash", value: "bg", cities: ["Dhaka", "Chittagong"] },
  ];
  const [data, setData] = useState({
    name: "", value: "",
    cities: [],
  });
  console.log(countries)
  // const [countryv, setCountryv] = useState()
  // let con = "p";
  // let pk = 0;
  // let ind = 1;
  // let bg = 2;
  // let arr = 0;
  // if (countryv === pk) {
  //   arr = 0;
  // } else if (countryv === ind) {
  //   arr = 1;
  // } else if (countryv === bg) {
  //   arr = 2;
  // }
  // state = {
	// 		countries : "Pakistan",
	// 		cities : "Karachi",
	// 	};
  //   function value(){
  //     return    
  //   }
  // function onChanged(e){
  //     // handleNameChange(e);
  //     // const name = e.target.name;
  //     const value = e.target.value;
  //     // 
  //     setData(value)
  //   // }
  //   }
  return (
    <div className="app">
      <h1>Ubaidullah</h1>
      <select 
      style={{
      border: "6px solid #0091ff", 
      fontSize:"50px", margin: "10px", 
      borderRadius:"5px", color: "#0091ff"}} 
      name="Countries" 
      value={data}
      onChange={(e)=>{
        console.log(e.target.value)
        setData(e.target.value)}}
      >
      <option value="Choose" selected="selected">Choose</option>
        {countries.map((item,index) => (
          <option value={index}>{item.name}</option>
        ) )
        }
      </select>


      <select 
      style={
        {
        border: "6px solid #0091ff", 
        fontSize:"50px", margin: "10px", 
        borderRadius:"5px", color: "#0091ff"
      }} value={data}
      name="Cities">
     
        {
        countries[data]?.cities?.map((item) => (
          <option>{item}</option>
        ))
        }
      </select>
      
    </div>
  );
}

export default App;
