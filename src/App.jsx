import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (<div className='App'>
  
  
  
      <BrowserRouter>
        <NavBar />
      <Home/>
  
  </BrowserRouter><div>
        <br /><br /><br />   <Footer />
      </div>
  
  
  
    </div>)
}
export default App;
