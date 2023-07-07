//import React from 'react';
import './Nav.css';
//import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
// import {TbListSearch} from 'react-icons/tb';
// import {CgPlayButtonR} from 'react-icons/cg';

function Nav() {

  // const [openMenu, setOpenMenu] = React.useState(null)

  // const open = (event) => {
  //   setOpenMenu(event.currentTarget);
  // };


  //need to work on menu so i can switch between pages easier
  const menu = () => {
    return(
    <ul>
      <li>---Selection---</li>
      <li value='random'>Randomize/Homepage</li>
      <li value='create'>Create Recipe</li>
      <li value='certain'>Look For Certain Recipe</li>
      <li value='all'>All Recipes</li>
    </ul>)
  }
    
  return (
    <nav className="top">
      <button className='hambutton' type='button' onClick={menu}>
      <GiHamburgerMenu/>
      </button>
      <h1 className='options'>For more options click here </h1>
      {/*
     <menu> 
        <menuitem>Create</menuitem>
        <menuitem>Certain</menuitem>
        <menuitem>All</menuitem>
      </menu> 
      <p className="create">Create your recipes here!</p>
        <CgPlayButtonR className="create_button"/>
      <p className="certain">Look for certain recipes here, by name, number or ingredient</p>
        <TbListSearch className="certain_search"/>
      <p className="all">Click for all recipes</p>
        <CgPlayButtonR className="all_button"/>
      <p>Search by number of ingredient</p>
  <TbListSearch className="number_search"/>*/}
    </nav>
  )
}

export default Nav;