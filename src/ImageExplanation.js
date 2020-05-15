import React from 'react';
import Container from './ContainerStyle'



const Explanation = props => {
    return (
        <Container >
            <p>{props.explain}</p>
        </Container>

    );
};


export default Explanation;