import React, {useEffect, useState} from "react";
import "./App.css";
import ImageOfTheDay from "./ImageOfTheDay";
import Explanation from "./Explnation";
import axios from "axios";
function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=wBvIZ1KWeFz0mCRLOLEWycLrurIQ618AIaOfchCF")
          .then(response => {
              console.log(response.data)
              setNasaData(response.data)
          })
          .catch(error => {
              console.log(error)
          })

  }, [])
  return (
    <div className="App">
      
      < ImageOfTheDay nasaDataProps ={nasaData}/>
      < Explanation explain={nasaData.explanation} copyright={nasaData.copyright}/>
    </div>
  );
}

export default App;
