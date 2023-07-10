import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Recipe.css'

function Recipe() {
    const location = useLocation();
    const searchId = new URLSearchParams(location.search).get('id');
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/id_recipe/${searchId}`)
        .then((res) => res.json())
        .then((data) => {
        console.log('Fetched recipe:', data);
        setRecipe(data);
    })
    .catch((error) => console.log(error));
}, [searchId]);

if (!recipe) {
    return <div>Loading...</div>;
}

return (
    <div className="searched_recipe">
        <Link to='/'>
        <button>Return to homepage</button>
        </Link>
    <div className='id_container'>
        <Card className="id_card" key={recipe.id}>
            <Card.Img className="id_image" src={recipe.image} alt={recipe.title} />
            <Card.Body>
                <Card.Title className="id_title">Title: {recipe.title}</Card.Title>
                <Card.Text className="id_times">Times: {recipe.times}</Card.Text>
            </Card.Body>
        </Card>
    </div>
    </div>
);
}

export default Recipe;