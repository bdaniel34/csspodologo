import React from "react";

export default function Table() {
  return (
    <div>
      {/* <div className="even">
        <div className="col">Solución de <br/> Terceros</div>
        <div className="col">Tipo/Propósito</div>
        <div className="col">Proveedor</div>
      </div>
      <div className="even">
        <div className="col"> Google Analytics</div>
        <div className="col">
          Ubicación: Google Maps proporciona un servicio de mapas. Registra el
          origen del usuario y las keywords utilizadas. Genera un prefijo único
          con fines analíticos. Analíticas: Google proporciona datos anónimos
          sobre las visitas a la página web. Vídeos: Youtube permite la subida y
          visualización de vídeos. Utiliza cookies para medir las
          visualizaciones o registrar eventos. Interacción Social: Google
          permite que la información de la WEB sea compartida en su red social
          Google +
        </div>
        <div className="col">Google Inc.</div>
      </div> */}
 
      <table id="customers">
     
        <tr>
          <th>
            Solución de
            <br /> Terceros
          </th>
          <th>Tipo/Propósito</th>
          <th>Proveedor</th>
        </tr>
        <tr id="customers">
          <th>Google Analytics</th>
          <th><p>
            Ubicación: Google Maps proporciona un servicio de mapas. Registra el
            origen del usuario y las keywords utilizadas. Genera un prefijo
            único con fines analíticos. Analíticas: Google proporciona datos
            anónimos sobre las visitas a la página web. Vídeos: Youtube permite
            la subida y visualización de vídeos. Utiliza cookies para medir las
            visualizaciones o registrar eventos. Interacción Social: Google
            permite que la información de la WEB sea compartida en su red social
            Google + </p>
          </th>
          <th><p>Google Inc.</p></th>
   
        </tr>
        <tr id="customers">
          <th>Add to any</th>
          <th>
          <p>Interacción social: Permite que la web sea compartida en redes
            sociales.</p>
          </th>
          <th><p>AddToAny</p></th>
        </tr>
        <tr id="customers">
          <th>AddThis</th>
          <th>
            <p>
                Herramientas Web. Interacción social. Addthis permite que la web sea
                compartida en redes sociales como Google+, Facebook, etc.
            </p>
          </th>
          <th><p>Oracle Inc.</p></th>
        </tr>
        <tr id="customers">
          <th>Adobe Omniture</th>
          <th>
            <p>
                Analíticas: Omniture proporciona datos anónimos sobre las visitas a
                nuestra web y nos permite hacer pruebas y evaluar la mejor manera de
                presentar la web a nuestros usuarios.
            </p>
          </th>
          <th><p>Adobe Systems Incorporated</p></th>
        </tr>
        <tr id="customers">
          <th>YouTube</th>
          <th><p>Web Video</p></th>
          <th><p>Google Inc.</p></th>
        </tr>
        <tr id="customers">
          <th>Facebook</th>
          <th><p>Facebook Like, Comments, Feed</p></th>
          <th><p>Facebook Inc</p>.</th>
        </tr>
        <tr id="customers">
          <th>Twitter</th>
          <th><p>Follow Us</p>
          </th>
          <th><p>Facebook Inc.</p></th>
        </tr>
   
      </table>
 
    </div>
  );
}
