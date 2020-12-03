import React, { Component } from "react";
import logo from "../../images/logo.svg";
import planet from "../../images/planet.svg";
import BtnLarge from "../../components/buttonLarge";
import "./styles.css";

const Homesite = () => (
  <div className="HomeSite">
    <header>
      <img src={logo} alt="logo" height="40" />

      <button>IDIOMA DO SITE: PORTUGUÊS</button>
    </header>

    <main>
      <div className="content">
        <img src={planet} alt="planet" />
        <div className="content-text">
          <h2>Aprenda idiomas de graça.Agora e sempre.</h2>
          <div className="btngroup">
            <BtnLarge txt="COMECE AGORA" />
            <BtnLarge txt="JÁ TENHO UMA CONTA" />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Homesite;
