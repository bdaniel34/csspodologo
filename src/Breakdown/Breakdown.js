import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Breakdown() {
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
      <img className="sizelogo" src="./feets2.png" alt="" />
    </div>
  );
}
