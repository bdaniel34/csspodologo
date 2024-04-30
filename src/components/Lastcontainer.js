import React from "react";
import Backtotop from "./Backtotop";
import Cookies from "./Cookies";
export default function Lastcontainer() {
  return (
    <div className="lastcontainer">
      <div>
        <Backtotop />
        <a id="cookies" href="/Cookies">
          Cookies
          <Cookies/>
        </a>
       
      </div>
      
      <div>© 2022 MANUEL POYATOS VILLAMOR Todos los derechos reservados</div>
      <div>
        Producido por{" "}
        <a id="colorlastlink" href="#">
          BeeDIGITAL
        </a>
      </div>
    </div>
  );
}
