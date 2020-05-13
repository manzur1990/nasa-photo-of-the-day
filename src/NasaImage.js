import React from 'react';

const NasaImage = props => {
    
    return (
        <div className="image-container">
            <img src={props.hdUrl} className="nasaImage" alt="dailyImage" />
        </div>
    );
}

export default NasaImage;