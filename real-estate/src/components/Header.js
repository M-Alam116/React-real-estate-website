 import React, {useState} from 'react';
 import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';
 import Logo from '../assets/img/logo.svg'
 import './header.css';
 import { GiHamburgerMenu } from 'react-icons/gi';
 import {RxCross1} from 'react-icons/rx';
 import {CgProfile} from 'react-icons/cg';

const Header = () => {

const [openLine, setLineopen] = useState(true);
const [openCross, setOpencross] = useState(false);

const handleClick = () => {
  setLineopen(!openLine);
  setOpencross(!openCross);

  const open = document.querySelector('.header-ham');
  if (openLine) {
    open.style.display = 'block';
  } else {
    open.style.display = 'none';
  }
};




  return <header className='z-10 py-4  border-b' style={{position: "sticky", top:0, background: "white"}}>
    <div className='container mx-auto flex justify-between items-center'>
    <Link to='/'>
      <img src={Logo} alt=''/>
    </Link>

    <div className='header'>
      <NavLink to='/'>
        <h3>Home</h3>
      </NavLink>
      <NavLink to='/about'>
        <h3>About</h3>
      </NavLink>
      <NavLink to='/services'>
        <h3>Services</h3>
      </NavLink>
      <NavLink to='/contact'>
        <h3>Contact</h3>
      </NavLink>
    </div>

    <div className='header-ham'>
      <NavLink to='/'>
        <h3>Home</h3>
      </NavLink>
      <NavLink to='/about'>
        <h3>About</h3>
      </NavLink>
      <NavLink to='/services'>
        <h3>Services</h3>
      </NavLink>
      <NavLink to='/contact'>
        <h3>Contact</h3>
      </NavLink>
    </div>
    <Link to='/login'>
    <CgProfile className='hambarger'/>
    </Link>
    <div className='flex items-center gap-6'>
      <Link className='sign hover:text-violet-900 transition' to='/login'>Log in</Link>
      <Link className='sign bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg trasition ' to='/signup'>Sign Up</Link>
    </div>
    {openLine ? <GiHamburgerMenu  className='hambarger' onClick={handleClick}/> : null}
    {openCross ? <RxCross1 className='hambarger' onClick={handleClick}/> : null}
    </div>
  </header>
};

export default Header;
