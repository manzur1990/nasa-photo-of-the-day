import React from 'react';


const NasaImage = props => {
    console.log(props)
    return (
        <div >
            <img src={props.hdUrl} className="nasaImage" alt={props.title} />
        </div>
    );
}

export default NasaImage;