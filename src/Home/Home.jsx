import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
import {CgPlayButtonR} from 'react-icons/cg';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
    fetch('http://localhost:3000/all_recipes')
    .then(res => res.json())
    .then(data => {
        console.log('Fetched data:', data);
        setRecipes(data);
    })
    .catch(error => console.log(error));
}, []);

return (
    <div className='home'>
        <h1 className='first'>Welcome to the Lovely Recipe Site!</h1>
        <p className='button'>Random Recipe Button!</p>
        <input className='search' type='text' placeholder='-------Search by id-------'></input>
        <button className='search_button'>Search</button>
        <button className='sort'>Sort by</button>
        <CgPlayButtonR className="random_button"/>
        <div className='recipe_container'>
        {recipes.map(recipe => (
        <Card className='recipe_card' key={recipe.id}>
            <Card.Img className='image' src={recipe.image} alt={recipe.title} />
            <Card.Body>
                <Card.Title className='title'>Title: {recipe.title}</Card.Title>
                <Card.Text className='times'>Times: {recipe.times}</Card.Text>
            </Card.Body>
            </Card>
        ))}
        </div>
        </div>
    );
};

export default Home;