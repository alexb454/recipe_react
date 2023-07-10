// import { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';

// const AllRecipes = () => {
//     const [info, setInfo] = useState([]);
//     // const [thisPage, setThisPage] = usestate(1);
//     // const [itemsForOnePage] = useState(8);

//     useEffect(() => {
//         fetch('http://localhost:3000/all_recipes')
//         .then(res => res.json())
//         .then(data => {
//             console.log('Fetched data:', data);
//             setInfo(data);
//         })
//         .catch(error => console.log(error));
//     }, []);
//     console.log('Info:', info); 
//     return (
//         <>
//         {info.map(recipe => (
//         <Card className='recipe_card' key={recipe.id}>
//             <Card.Img className='image' src={recipe.image} alt={recipe.title}/>
//             <Card.Body>
//                 <Card.Title className='title'>{recipe.title}</Card.Title>
//                 <Card.Text className='times'>{recipe.times}</Card.Text>
//                 </Card.Body>
//             </Card>
//             ))}
//         </>
//     );
// }


// export default AllRecipes;

// import {CgPlayButtonR} from 'react-icons/cg';
// import './Home.css';
// import AllRecipes from '../Recipes/Recipe';
// import { useEffect, useState } from 'react';
// //import Card from 'react-bootstrap/Card';

// function Home() {
//     const [info, setInfo] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/all_recipes')
//         .then(res => res.json())
//         .then(data => {
//             console.log('Fetched data:', data);
//             setInfo(data);
//         })
//         .catch(error => console.log(error));
//     }, []);
//     console.log('Info:', info); 

//     return(
//         <div className='home'>
//             <h1 className='first'>Welcome to the Lovely Recipe Site!</h1>
//             <p className='button'>Random Recipe Button!</p>
//             <input className="search" type="text" placeholder="-------Search by id-------"></input>
//             <button className="search_button">Search</button>
//             <button className="sort">Sort by</button>
//             <CgPlayButtonR className="random_button"/>
//             <AllRecipes info={info} />
//         </div>
//     )
// }

// export default Home;
