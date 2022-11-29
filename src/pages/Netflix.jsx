import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  // FUNCION PARA QUE LA NAVBAR SE OCULTE AL BAJAR EL MOUSE
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  /////////////////////////////////////////////////////////

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  );
}
