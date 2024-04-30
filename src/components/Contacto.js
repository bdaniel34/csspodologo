import Form from "../Breakdown/Form";
import Maps from "../Breakdown/Maps";
import Lastcontainer from "./Lastcontainer";
import Containercontact from "./Containercontact";
import Breakdown from "../Breakdown/Breakdown";
export default function Contacto() {
  return (
    <div>
      <Breakdown />
      <div className="columnscontact">
        <div className="bodytext">
          <div style={{ color: "green" }} className="header">
            Los mejores podólogos de Algeciras{" "}
          </div>

          <p className="header">Servicios de podología</p>
          <p>
            En <strong>Clínica Poyatos Podólogos </strong>
            contamos con uno de los creadores de la Fundación Española y con los
            mejores <strong> podólogos </strong>
            especialistas que <br />
            satisfarán plenamente sus necesidades. Contacte con nosotros. 
            <p className="header">Ubicación</p>
            <strong>Dirección: </strong> Calle Regino Martínez, 13-15 - primero
            11201 Algeciras.
            <br />
            <strong>Teléfono: </strong>
            <a href=""> 956 662 284</a>
            <br />
            <strong>Email: </strong>
            <a href=""> malenasol@live.com</a>
            <br />
            <strong>Email: </strong>
            <a href="">atencion@clinicapoyatospodologos.com</a>
            <br />
          </p>
        </div>
        <Form />
   
      </div>
      <Maps />
      <Containercontact />
      <Lastcontainer />
    </div>
  );
}
