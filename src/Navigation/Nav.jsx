import './Nav.css';
import {GiHamburgerMenu} from 'react-icons/gi'


function Nav() {

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
    </nav>
  )
}

export default Nav;