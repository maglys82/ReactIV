import React from 'react';
import { Container } from 'react-bootstrap';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAhFBMVEXXKx////8AOabUAADsqqgAKqKMMnDfKgl1hMIAOqwANaUtS6za3+4AN6UALqMAMqQAF57j5/MAJaEAAJoAH5+9xOERPKcbQalKW7GLnM5se77u8vkyRaq1weBfcLqyvN1UarijrdU7VK+AksnGzOXR2Ot+jMeVpdNLYrWqtdlLVrCrX4KjQLlxAAAB+ElEQVR4nO3Z3Y6aQBiAYZiWdjsyMICCglVR13Xb+7+/4s9af8CmcUm+Me9zYoLfgW+AYVRPPSp48SXwCCGkH4QQ0hNCCOkJIYT0hBD3QsyThOTFP0ocCdHjiblf4khIVFbTpwixP/1Z9Awhme/P7ROERItmxt69ttwIsfNmpgycD9FF0szMh86HRPsPGQ608yH1fqi8t26JDTH6JM7D/VCd/j2mr+98qSFmuhx8mM4OQ9X0dGiwzI0bIboYJeGH5Dh1OhBWq+v7RWqI0tG8e7x6SZ25R5QZllXH9Hp80yE4RJl0/No6XOcty5fgEKViO7kdTRatexXRIcrYMrmaXC9vLyv5Ic2zMB9dDG6iuH1QeojS2fk5ecu65uSHFOdzibshw/piMO/aOEoPMTa8GHzr2stLD4m3x6fi8eU17fieKD0krffvV9vs8EipZm6uWiZf794eDQI1PDxSJh1feIWH6PHuktoEu9MQxbtHyrrjhzrhIcGquS22xxvc2FWTtWxft4SHZKH/Xpy2iCb9lTSnx8EQrasyPT8DcfQetv9QJzskXmyvtojabtr/YZAdosztYhvlDp6R/0DI5yKEkJ4QQkhPCCGkJ4QQ0hNCCOmJ9+NRqZCQbw/7/VUC7/vjvkjgAQAAAAAAAAAAAAAAAAAAAAAAAC74AxRXYLS7dsOtAAAAAElFTkSuQmCC" alt="" />
      <Container>
        <h2>Bienvenidos!!</h2>
        <a className="navbar-brand" href="/">Feriados de Chile Año 2023</a>
      </Container>
    </nav>
  );
}

export default Navbar;