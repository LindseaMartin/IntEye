import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
          <img src={logo} alt='logo'></img>
        </div>
      </Tilt>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/4wAPK6Ah5gOX/illuminati">Illuminati</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
    </div>
  );
};

export default Logo;
