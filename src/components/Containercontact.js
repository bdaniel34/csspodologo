import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Containercontact() {
 

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
  return (
    <div id="border">
      <div className="containercontact">
        <Link to="/">
          <img
            src="https://www.clinicapoyatospodologos.com/uploads/6wVPcs3D/310x0_237x0/30582-clinica-poyatos-podologos-logo.jpg"
            alt=""
          ></img>
 
        </Link>

        <div>
          <p className="positiontextcontainer" id="stylefirstcontainer">
            CONTACTA CON NOSOTROS{" "}
          </p><br/>
          <strong>Teléfono: </strong>
          <a href=""> 956 662 284</a>
          <br />
          <strong>Email: </strong>
          <a href=""> malenasol@live.com</a>
          <br />
          <strong> Dirección: </strong> Calle Regino Martínez, 13-15 -1º 11201
          Algeciras.
          <br />
        </div>
        <div className="positiontextcontainer" id="spacingeven">
          <div>ENLACES LEGALES</div>
          <ul>
            <Link to="/Avisolegal">Aviso Legal</Link>
            <ScrollToTopOnMount/>
          </ul>
          <ul>
            <Link to="/Politica">Política de Privacidad</Link>
          </ul>
          <ul>
            <Link to="/Policookies">Política de Cookies</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
