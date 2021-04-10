import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import OneWorldCard from './OneWorldCard';

const Partners = () => {
    useEffect(() => {
        document.title = "Finnair Virtual | Partners";
    });
    return (
        <Container className="my-4">
            <OneWorldCard/>
        </Container>
    )
}

export default Partners;
