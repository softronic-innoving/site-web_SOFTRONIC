import React, { useEffect, useState } from 'react'
import '../../styles/Loader.css'
import logo from '../../assets/logo.png';

function Loader() {
      const [visible, setVisible] = useState(true);


  if (!visible) return null;
  return (
   <div className="loader-container">
  <img src={logo} alt="Logo" className="loader-logo" />
  <div className="loader-dots">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>

  )
}

export default Loader
