import React, { useState, useEffect } from "react";
import "./App.css";
import NasaImage from "./NasaImage"
import Title from "./Title";
import Explanation from "./ImageExplanation";
import axios from "axios";
function App() {
  const [nasaData, setNasaData] = useState([]);
console.log(nasaData)
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=wBvIZ1KWeFz0mCRLOLEWycLrurIQ618AIaOfchCF")
          .then(res => {
              setNasaData(res.data)
              
          })
          .catch(error => {
              console.log(error)
          })

  }, [])
  
  return (
    <div className="App">
      
      < Title title={nasaData.title} date={nasaData.date} />
      <NasaImage hdUrl={nasaData.hdurl} />
      < Explanation explain={nasaData.explanation} />
    </div>
  );
}

export default App;
