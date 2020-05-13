import React from "react";


function Title(props) {

    return (
        <div>
            <h1>Nasa Image of The Day</h1>
            <h3>{props.title}</h3>
            <h6>{props.date}</h6>
        </div>
    )
}


export default Title;


