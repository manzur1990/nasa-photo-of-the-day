import React from "react";
import NasaImage from "./NasaImage"

function ImageOfTheDay(props) {

    return (
        <div>
            <h1>Nasa Image of The Day</h1>
            <NasaImage title={props.nasaDataProps.title} hdUrl={props.nasaDataProps.hdurl} />
        </div>
    )
}


export default ImageOfTheDay;


