import React from 'react';

const Explanation = props => {
    return (
        <div>
            <p> {props.explain}</p>
            <p>By: {props.copyright}</p>
        </div>

    );
};


export default Explanation;