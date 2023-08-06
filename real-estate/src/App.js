import React from 'react';
// import Routes and Route
import {Routes, Route} from 'react-router-dom';

// Import Components
import Header from './components/Header';
import  Footer from './components/Footer'; 

// Import Pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import PageNotFound from './pages/404Page';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return ( 
    <div className='max-w-[1440px] mx-auto bg-white'>
    {/* <Login /> */}
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/property/:id' element={<PropertyDetails />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
  </div>
  )
};

export default App;
