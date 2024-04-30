import { TileLayer, Marker, MapContainer, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
 
 


export default function ContainerMap() {
 
  return (
    <div className="containermap">
      <h1>Contacto </h1>
      <p>
        Contamos con podólogos altamente cualificados, quienes le garantizan un
        servicio de primer nivel y una excelente atención.
      </p>

      <div>
        <MapContainer
          center={[36.13242880404336, -5.448560267479523]}
          zoom={18}
          maxZoom={18}
          scrollWheelZoom={false}
          style={{ height: "50vh", width: "100wh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[36.13242880404336, -5.448560267479523]}>
 
            <Popup>
              Clinica Poyatos <br />  
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
