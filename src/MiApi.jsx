import React, { useState, useEffect } from 'react';

function MiApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
 if (loaded) {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
      });
    }
  }, [loaded]);

  return (
    <div className='btn'  >
      <button onClick={() => setLoaded(true)}>Iniciar</button>
      {loaded && loading && <p>Cargando datos...</p>}
      {loaded && !loading && (
        <div>
          <h3>Feriados </h3>
          <ul>
            {data.map((item) => (
              <li key={item.date}> {item.title} {item.type} {item.extra}</li>))}
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default MiApi;










  