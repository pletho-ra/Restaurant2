import React from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app__navbar'>
      <div className='app__navbar-logo'>
          <img src={images.gericht} alt="AppLogo" />
      </div>
          <ul className="app__nav-links">
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#About">About</a></li>
              <li className='p__opensans'><a href="#Menu">Menu</a></li>
              <li className='p__opensans'><a href="#Awards">Awards</a></li>
              <li className='p__opensans'><a href="#Contact">Contact</a></li>
          </ul>  
      <div className="app__nav-login">
          <a href="#Login" className='p__opensans'>Login / Register</a>
          <div />
          <a href="/" className='p__opensans'>Book Table</a>  
        </div>
      <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick = {() => setToggleMenu(true)} />

          {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide_bottom">
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__nav-smallscreen-links">
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#About">About</a></li>
              <li className='p__opensans'><a href="#Menu">Menu</a></li>
              <li className='p__opensans'><a href="#Awards">Awards</a></li>
              <li className='p__opensans'><a href="#Contact">Contact</a></li> 
          </ul> 
            </div> 
          )}
       </div>      
      
  </nav>
)
}

export default Navbar;
