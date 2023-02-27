import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=19f811528d1aab4095e197501690885c`
  const searchLocation = (event) =>{
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.table(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}  {data.sys ? <span>{data.sys.country}</span>  : null }</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
            {/* <h1>60</h1> */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>  : null }
            {/* {data.weather ? <div>{data.weather[0].icon}</div>  : null } */}
          </div>
        </div>
        
        {data.name !== undefined &&
                <div className="bottom">
                <div className="feels">
                  {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
                  <p>Feels Likes</p>
                </div>
                <div className="humidity">
                {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
      
        }


      </div>
    </div>
  );
}

export default App;
