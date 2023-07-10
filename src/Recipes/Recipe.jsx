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