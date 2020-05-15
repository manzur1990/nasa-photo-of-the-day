import React from "react";
import Shitzu from './ContainerStyle'

function Title(props) {

    return (
        <Shitzu color>
            <h1>Nasa Image of The Day</h1>
            <h2>{props.title}</h2>
            <h5>By : {props.copyright}</h5>
            <h6>{props.date}</h6>
        </Shitzu>
    )
}


export default Title;


