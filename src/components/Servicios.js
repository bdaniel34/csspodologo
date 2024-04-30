import Breakdown from "../Breakdown/Breakdown";
import Lastcontainer from "./Lastcontainer";
import Containercontact from "./Containercontact";

export default function Servicios() {
  return (
    <div>
      <div>
        <Breakdown />
        <div className="columns">
          <p className="textservicios">
            <span className="header" style={{ color: "green" }}>
              Excelentes servicios de podología  en Algeciras.
            </span>
            <br /><br />
            <span className="header">Servicios de podología.</span>
            <br /><br /> En Clínica Poyatos Podólogos nos esmeramos por ofrecer
            servicios de podología que garanticen su bienestar.
            <br /> Ofrecemos una atención exclusiva en todas las áreas de la
            especialidad podológica:
            <br />
            <ul>
              <li>
                Análisis de la marcha con estudio biodinámico de las mismas.
              </li>
              <li>
                Diseño y confección personalizada de soportes ortopodológicos
                para niños, adolescentes, deportistas y el área de geriatría.
              </li>
              <li>
                Tratamientos quiropódicos de todo tipo con diseño de ortosis
                personalizada.
              </li>
            </ul>
            Consúltenos, hemos dedicado muchos años al estudio de los pies y sus
            problemas relacionados con la salud general.
          </p>

          <div id="marginservicios">
            <img
              src="https://www.clinicapoyatospodologos.com/uploads/T09zxxSR/290x0_458x0/30692-podologo-tratando-pies-de-paciente.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <Containercontact/>
      <Lastcontainer/>

      </div>
    </div>
  );
}
