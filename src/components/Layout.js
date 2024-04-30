import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="na">
      <nav>
        <header>
          <div className="na_list">
            <Link className="btn" to="/">
              INICIO
            </Link>
            <Link className="btn" to="/servicios">
              SERVICIOS DE PODOLOGIA
            </Link>
            <Link className="btn" to="/contacto">
              CONTACTO
            </Link>
          </div>
        </header>
      </nav>
      <Outlet />
    </div>
  );
}
