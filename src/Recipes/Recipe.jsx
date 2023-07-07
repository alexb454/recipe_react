import { useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

const AllRecipes = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(all => setInfo(all))
        .catch(error => console.log(error));
    })
    return(
        <Card className='recipe_card'>
            <Card.Img className='image'>{info.image}</Card.Img>
            <Card.Body>
                <Card.Title className='title'>{info.title}</Card.Title>
                <Card.Text className='times'>{info.times}</Card.Text>
            </Card.Body>
        </Card>
    )
}


export default AllRecipes;