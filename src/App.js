import "./App.css";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Avisolegal from "./components/Avisolegal";
import Politica from "./components/Politica";
import Policookies from "./components/Policookies";
import Cookies from "./components/Cookies";
import Containercontact from "./components/Containercontact";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/Avisolegal" element={<Avisolegal />} />
            <Route path="/Politica" element={<Politica />} />
            <Route path="/Policookies" element={<Policookies />} />
            <Route path="/Cookies" element={<Cookies />} />
            <Route path="/" element={<Containercontact />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
