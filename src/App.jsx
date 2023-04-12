import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';
import Presentation from './Pourquoi-Nous/Presentation';
import Map from './components/MAP/Map'
import Formulaire from './components/Email/Formulaire'

import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (<div className='App'>



    <BrowserRouter>
      <NavBar />
      <Routes>
     


            <Route path="/" element={<Home />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/test" element={< Home />} />
            <Route path="/Map" element={< Map />} />
            <Route path="/Presentation" element={< Presentation />} />
            <Route path="/Formulaire" element={< Formulaire />} />



            



          </Routes>

    </BrowserRouter><div>
      <Footer />
    </div>



  </div>)
}
export default App;
