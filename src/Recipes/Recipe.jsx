//import React from 'react';
import Card from 'react-bootstrap/Card';

function Display() {

    return(
        <Card className='recipe_card'>
            <Card.Img className='image'></Card.Img>
            <Card.Body>
                <Card.Title className='title'></Card.Title>
                <Card.Text className='times'></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Display;