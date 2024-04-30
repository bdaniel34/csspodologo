import Breakdown from "../Breakdown/Breakdown";
import Containercontact from "./Containercontact";
import ContainerMap from "./ContainerMap";
import Lastcontainer from "./Lastcontainer";
export default function Body() {
  return (
    <div>
      <Breakdown />

      <div className="columns">
        <p className="bodytext">
          <span className="header" style={{ color: "green" }}>
            Clínica de podología en Algeciras.
          </span>
          <br /> Somos <strong>Clínica Poyatos Podólogos</strong>, una
          reconocida clínica de podología que ofrece sus servicios en Algeciras
          desde 1965. Visítenos, recibimos formación académica continuada.
        </p>
        <div className="marginpicture">
          <img
            src="https://www.clinicapoyatospodologos.com/uploads/6Mb3dPjn/354x0_555x0/30584-podologo-retirando-venda-de-paciente.jpg"
            alt=""
          ></img>
        </div>
        </div>
        <div className="secondcolumn">
          <div className="marginpicture">
            <img
              src=" https://www.clinicapoyatospodologos.com/uploads/zNRhNSrn/354x0_555x0/30583-podologo-analizando-pie-de-paciente.jpg"
              alt=""
            ></img>
          </div>
          <div className="">
            <p className="bodytext">
              <span className="header">Servicios de podología.</span>
              <br /> Gracias a los años dedicados al estudio de los pies,
              podemos garantizarle excelentes{" "}
              <strong>servicios de podología.</strong> Llámenos y consulte por
              nuestros tratamientos quiropódicos.
            </p>
          </div>
        </div>

      <ContainerMap />
      <Containercontact />
      <Lastcontainer />
    </div>
  );
}
