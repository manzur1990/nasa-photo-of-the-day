import React from 'react';

const NasaImage = props => {

    return (
        <div className="imageContainer">
            <h3>{props.title}</h3>
            <img src={props.hdUrl} className="nasaImage" alt="dailyImage" />

        </div>
    );
}

export default NasaImage;