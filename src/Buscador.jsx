import React, { useState } from 'react';

function Buscador({ data, onSearch }) {
  const [filtro, setFiltro] = useState('');

  const InputChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleSearch = () => {
    onSearch(filtro);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por Tipo"
        value={filtro}
        onChange={InputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Buscador;
