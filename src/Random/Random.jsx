import './Random.css';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import {CgPlayButtonR} from 'react-icons/cg';

function Random() {

    const location = useLocation();
    const searchId = new URLSearchParams(location.search).get('id');
    const [random, setRandom] = useState(null);

    const handleRandom2 = () => {
        fetch('http://localhost:3000/random_recipe')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch random recipe');
            }
            return res.json();
        })
        .then((data) => {
            console.log('Fetched recipe:', data);
            setRandom(data);
        })
        .catch((error) => console.log(error));
    };
    
    useEffect(() => {
        handleRandom2();
    }, [searchId]);

if (!random) {
    return <div>Loading...</div>;
}
    return(
        <div className="random_recipe">
            <p className='press'>Press Again For A New Random!</p>
            <CgPlayButtonR className="random_button2" onClick={handleRandom2}/>
        <Link to='/'>
        <button className='homepage'>Return to HomePage</button>
        </Link>
    <div className='random_container'>
        <Card className="random_card" key={random.id}>
            <Card.Img className="random_image" src={random.image} alt={random.title} />
            <Card.Body>
                <Card.Title className="random_title">Title: {random.title}</Card.Title>
                <Card.Text className="random_times">Times: {random.times}</Card.Text>
            </Card.Body>
        </Card>
    </div>
    </div>
    )
}

export default Random;