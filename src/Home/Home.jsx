//import React from 'react';
import {CgPlayButtonR} from 'react-icons/cg';
import './Home.css';
import Display from '../Recipes/Recipe';


function Home() {

    return(
        <div className='home'>
            <h1 className='first'>Welcome to the Lovely Recipe Site!</h1>
            <p className='button' onClick={'random'}>Random Recipe Button!</p>
            <search>Search</search>
            <button>Sort by</button>
            <CgPlayButtonR className="random_button"/>
            <Display/>
        </div>
    )
}

export default Home;