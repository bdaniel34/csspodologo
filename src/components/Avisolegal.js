import React from 'react' 
import {Link } from "react-router-dom";
import Layout from './Layout';
import Containercontact from './Containercontact';
import Lastcontainer from './Lastcontainer';
export default function Avisolegal() {
  return (
    <div>
       <div className="nav">
        <div className="nav_list">
          <a className="stylefirstcontainer" href="">
          <i class="fa fa-envelope" id="phonecolor" aria-hidden="true"></i>
            <span> malenasol@live.com</span>
   
          </a>
          <a className="stylefirstcontainer" href="">
          <i class="fa fa-phone" id="phonecolor"></i>
            <span> 956 662 284</span>
       
          </a>
        </div>
      </div>

      <div className="na">
        <Link to="/">
          <img
            src="https://www.clinicapoyatospodologos.com/uploads/6wVPcs3D/310x0_237x0/30582-clinica-poyatos-podologos-logo.jpg"
            alt=""
            height={90}
          ></img>
        </Link>
        <div className="positionlayout">
          <Layout />
        </div>
      </div>
        <div id="avisolegal">AVISO LEGAL</div>
        <ul className='avisolegalterms'>
            <p>1.El titular de este sitio web es MANUEL POYATOS VILLAMOR, con N.I.F. 24998578Q, con domicilio en Calle Regino Martínez, 13-15 - primero 11201 ALGECIRAS (Cádiz)</p>
            <p>2.El acceso al site de MANUEL POYATOS VILLAMOR es gratuito. Todo el contenido es propiedad intelectual de MANUEL POYATOS VILLAMOR. Cualquier utilización de los mismos contraria a las normas en materia de propiedad intelectual será perseguida con arreglo a la legislación vigente.</p>  
        </ul>
 
      <Containercontact />
      <Lastcontainer />
    </div>
  )
}
