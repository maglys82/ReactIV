
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container>
        <div className="social-icons">
          <a href="https://www.facebook.com/TuPaginaDeFacebook" target="_blank">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/TuCuentaDeInstagram" target="_blank">
            <FaInstagram size={30} />
          </a>
        </div>
        <p>&copy; 2023 @maglys82 </p>
      </Container>
    </footer>
  );
}

export default Footer;
