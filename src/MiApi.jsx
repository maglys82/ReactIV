import React, { useState, useEffect } from 'react';

function MiApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://www.feriadosapp.com/api/')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default MiApi;


  