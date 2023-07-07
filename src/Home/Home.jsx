import {CgPlayButtonR} from 'react-icons/cg';
import './Home.css';
import AllRecipes from '../Recipes/Recipe';

function Home() {

    return(
        <div className='home'>
            <h1 className='first'>Welcome to the Lovely Recipe Site!</h1>
            <p className='button'>Random Recipe Button!</p>
            <input className="search" type="text" placeholder="-------Search by id-------"></input>
            <button className="search_button">Search</button>
            <button className="sort">Sort by</button>
            <CgPlayButtonR className="random_button"/>
            <AllRecipes/>
        </div>
    )
}

export default Home;