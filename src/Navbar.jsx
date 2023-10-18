import React from 'react';
import { Container } from 'react-bootstrap';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAA3lBMVEX////fACwpRY7hACywh4jeACKvr6/z/PiUAADkACkqRY2/v7+Nk54qRI/fAB6vjo6IjJQaPokAFVAoRJQURIidDRspRov///oUNIfe5ObY4OCPAADkAC/+/f8oR4myjZK2tbmEhYbAwMAdPI0AAFAAE1O9yN4AMH5/jrBmeqfHzNoJMoiwvNEjQIcAK4Xz9/Z3ha5WbKIlPJClsclud5w8UpIAJXcPM3lEXJjP3eTl8PHb3eOLnLkzTIdVY52Yo7shOXINNpKHkLg/WpF6g7DC0txca5mgjIiaDSCugoUtgi8FAAAD/0lEQVR4nO3deVPTQBjH8XRbRBa3GlY3qbXxiBJsKEGqlrYc4s37f0M+GyL0SGGcdmie9ffhD6AkM/2yuTYZBs8DAAAAAAAAAAAAAAAAAAAAAMi9erIarx9UzJsi8FHir0Acv13rMJXYLj4/8pWRyxM7a60pMREolBBCLUVUOZDqpFiWfrfWmhJTgWbZPqOrPYJuB6pl6ywE3jsEIhCB64VABCJwvRBYMFJE0d2/A9aB4W7kcCBN1hNvL5Z3TBn5Bgrhv/e66V2TYs6B4X6Q9YRyNlAeZIF3+FTfPitmHOh/8Dre7kBJRwNNuE9LZUfG3Locr8CpV9KR53WC97bQ3h6UxpTtjawCtZ54ibZQEuympV0sA2U02RL388Uy3+TnxKsBnm9lFWhoM7wWtjp2E/U+2lv8lGgio8z8lQ2nQGHi8Fr6iY6h1v7ngyRM85eSQcw4UEp1PGzdGBXLZc/Hzwvj1slcIZ9A2j7V6fC2Nem0H2q+gXYMdXJCGV4QBLNrdehjeHoUsQ6ky84oPBvZwrm1KPn8wDdKzs4uWAVSYtSLu5TTmVmpE4zOwkjaUeYdKGmIDvY250ewG5v8JDK3BrPAXPxp6HlTY5jtpWrB0hwDhR70pwrHpz3pUqBU+ktncjc8vzBCivKbFywDRXw4eSANRonUkQuziYIyaXdyjcA7o+FbcIONYyAN4fX4dfKv+jGdIssX5xgoaQvNBVmxbCuh04dDgWn3auB2k8PNq4WPe2LBYZRfoIpElNlDaPB1oC++jfOFz3tClw8hv0Bt/D36cdA6jmmG7/t9e0Adp1q4ExjaY+j+QEutVGTCj3ZP/KYX7ITMApWJdKSzIDsMr3e6IztLPInduJKhs7nwv9O1GV1bF3eYpNDpeTBMF9z+ZRZo74AmP/qptn3FrTS6ggl/jo6dGUGlPvgzjyOU8E/PnDnIKBHbU8VUNnHkIENbJc1qZ+dGeZsb+6CUonxatPAZE8PAUgsfoTEL/HcIvHcIRCAC1wuBCETgeiEQgWwCV9GHwPs3EbjooaYrgU9Xwd/ZrJi/gb/az1bh9+92u/2wItoP6c38KgIfN1+swlZ9q1JebDwunk6/bNbrtfqyalVTb94E5t+7VjgdaN+eW321GgX+3Qcr+O6WZH/jCOQMgdwhkDsEcodA7hDIHQK5QyB3COQOgdwhkDsEcodA7hDIHQK5QyB3COQOgdwhkDsEcodA7hDIHQK5QyB3COQOgdwhkDsEcodA7hDI3f8XuNyf1lXQVr3ueuDNn7hSoHsmAxsb+YhO74j1qU9zm/htP6nAejaxttEoNtFGc8NJzUYxgtuXDSddbpf8NwkAAAAAAAAAAAAAAAAAAAAA+C/9AeXs/yd7SZtVAAAAAElFTkSuQmCC" alt="" />
      <Container>
        <a className="navbar-brand" href="/">Feriados de Chile</a>
      </Container>
    </nav>
  );
}

export default Navbar;