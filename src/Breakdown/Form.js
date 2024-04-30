import React from "react";
// import { useState } from "react";
export default function Form() {
  // const [first, setfirst] = useState("");
  // const handlesubmit = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="contactform">
      <div className="header">Formulario de contacto</div>
      <br />
      <form  >
        <input className="form" placeholder="Nombre*" name="nombre"></input>
        <input className="form" placeholder="Empresa" name="empresa"></input>
        <input className="form" placeholder="Telefono" name="Telefono"></input>
        <input className="form" placeholder="Email*" name="Email"></input>
        <textarea
          type="text"
          className="form"
          placeholder="Mensaje*"
        ></textarea>
        <br />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlfor="vehicle1">
          <a href="/Politica" className="underline">
            He leído y aceptado la Política de Privacidad *
          </a>
        </label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label htmlfor="vehicle3" className="underline">
          Autorizo a contactarme por email o por cualquier medio <br />
          con fines comerciales.
        </label>
        <br />
        <br />

        <input
          type="submit"
          value="Enviar"
          className="btnform"
 
          // onChange={(e) => setfirst(e.target.value)}
        ></input>
        <br />
        <br />
        <div className="underline">
          Este sitio está protegido por hCaptcha y se aplican su
        </div>
        <a className="underline" href="/Politica">
          Política de privacidad y Términos de servicio.
        </a>
      </form>
    </div>
  );
}
