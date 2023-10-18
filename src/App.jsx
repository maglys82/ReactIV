import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import './App.css'
import MiApi from './MiApi'

import React from 'react';
import Navbar from './Navbar';
import CustomJumbotron from './Jumbotron'; 
import Footer from './Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <CustomJumbotron /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
