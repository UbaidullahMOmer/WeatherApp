import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('Lahore')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=19f811528d1aab4095e197501690885c&units=metric`
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
      <h1>Ubaidullah</h1>
    </div>
  );
}

export default App;
