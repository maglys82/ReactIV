import './App.css'
import MiApi from './MiApi'
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      <MiApi /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
