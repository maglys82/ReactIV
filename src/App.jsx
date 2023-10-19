import './App.css'
import MiApi from './MiApi';
import Navbar from './Navbar';
import Footer from './Footer';
import Buscador from './Buscador';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
   
  }, []);

  const handleSearch = (criterio) => {
  
    const resultadosFiltrados = data.filter((item) => {
    
    return item.type.toLowerCase() == criterio.toLowerCase() 
    
    });

    setFilteredData(resultadosFiltrados);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      <MiApi setAppData= {setData}  />
      <Buscador data={data} onSearch={handleSearch} />
      <ul>
            {filteredData.map((item) => (
            <li key={item.date}> {item.title} {item.type} {item.extra}</li>))}
            
          </ul>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
