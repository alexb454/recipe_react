import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const AllRecipes = () => {
    const [info, setInfo] = useState([]);
    // const [thisPage, setThisPage] = usestate(1);
    // const [itemsForOnePage] = useState(8);

    useEffect(() => {
        fetch('/index.js')
        .then(res => res.json())
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