import React from 'react';

const currentDate = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto'>
        Copyright &copy; {currentDate}, All rights reserved
        </div>
    </footer>
  )
  
};

export default Footer;
