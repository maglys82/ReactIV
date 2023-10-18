import './App.css'
import MiApi from './MiApi'

import React from 'react';
import Navbar from './Navbar';
import CustomJumbotron from './Container'; 
import Footer from './Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <CustomJumbotron /> 
        <MiApi /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
