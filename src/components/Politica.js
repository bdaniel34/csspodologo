import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Containercontact from "./Containercontact";
import Lastcontainer from "./Lastcontainer";
export default function Politica() {
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
      <div id="avisolegal">POLÍTICA DE PRIVACIDAD</div>
      <p className="avisolegalterms">
        USO Y TRATAMIENTO DE DATOS DE CARÁCTER PERSONAL <br />
        <br /> Le informamos que los datos de carácter personal que pudieran
        proporcionarse, a través de este sitio web, así como los que pudiera
        facilitar en el futuro en el marco de su relación jurídica con esta
        entidad, serán incorporados a nuestra base de datos.
        <br /> Se informa sobre los siguientes extremos relativos a la
        protección de datos:
        <br />
        <br />
        1.<strong>Responsable del tratamiento:</strong>
        Somos responsables de los datos recogidos en el formulario
        correspondiente. <br /> <br />
        2.<strong>Necesidad del tratamiento:</strong> La comunicación de sus
        datos a través del formulario correspondiente es obligatoria para
        podamos contactar. <br />
        <br />
        3.
        <strong>
          {" "}
          Finalidades del tratamiento y legitimación del tratamiento:
        </strong>
        <ul>
          <li>
            Gestionar, administrar, prestarle los servicios o facilitarle los
            productos que solicite y, en su caso, para el cumplimiento y
            ejecución de los contratos que pudiera celebrar, conocer mejor sus
            gustos, adecuar los servicios a sus preferencias.
          </li>
          <li>
            Enviarle, por correo postal, correo electrónico y otros medios de
            comunicación electrónica equivalente, comunicaciones comerciales y
            publicitarias sobre nuestros productos y/o servicios.
          </li>
        </ul>
        4.<strong>Destinatarios:</strong> Contratamos con alguna entidad que
        prestan servicios como los de mantenimiento y hosting, a través de
        contratos de encargo del tratamiento para dar soporte a los fines de
        tratamiento indicados. <br />
        <br />
        5.<strong>Plazo de conservación de datos:</strong> Conservaremos sus
        datos mientras se mantenga el tratamiento y no solicite la supresión de
        los mismos. <br />
        <br />
        6.<strong>Derechos:</strong> Podrá ejercitar los derechos de acceso,
        rectificación, supresión, limitación al tratamiento, oposición,
        portabilidad y derecho a no ser objeto de una decisión basada únicamente
        en el tratamiento automatizado, mediante comunicación escrita al
        domicilio indicado en el aviso legal y a revocar su consentimiento sin
        efectos retroactivos u oponerse a la recepción de comunicaciones
        comerciales publicitarias por email y otros medios de comunicación
        electrónica equivalente, enviando y a presentar una reclamación ante la
        Autoridad de control, en España, la Agencia Española de Protección de
        Datos. <br />
        <br />
        7.<strong>Modificación de la política de privacidad:</strong> Nos
        reservamos el derecho a modificar su Política de Privacidad, de acuerdo
        a nuestro propio criterio, o motivado por un cambio doctrinal de la
        Autoridad competente en Protección de Datos, legislativo o
        jurisprudencial. El uso de la Web después de dichos cambios implicará la
        aceptación de éstos.
        <br />
        <br />
        8.<strong>Legislación aplicable:</strong> Cualquier controversia que se
        derive del uso de este Site, será regida, interpretada y sometida de
        acuerdo con las leyes de España.
        <br />
        <br />
      </p>
      <Containercontact />
      <Lastcontainer />
    </div>
  );
}
