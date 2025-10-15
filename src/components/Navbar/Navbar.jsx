import React, { useEffect, useState } from 'react';
import '../../styles/Navbar.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/LogoBopx.svg';
import { NavLink, useLocation  } from 'react-router-dom';

function Navbar() {
    const [animate, setAnimate] = useState(false);
    const location = useLocation(); // pour rejouer l'animation quand la route change (SPA)

  // Au montage / à chaque changement de route, on déclenche l'animation :
  useEffect(() => {
    // reset animation class then ajouter à la frame suivante pour forcer relance
    setAnimate(false);
    const id = requestAnimationFrame(() => {
      // petit délai avant l'ajout de la classe : permet au DOM de se réinitialiser
      setAnimate(true);
    });
    return () => {
      cancelAnimationFrame(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // dépendance : relance quand l'URL change

    return (
        <>
            <div className="head" style={{  zIndex: 1040 }}>
                {/* aria-hidden car décoratif */}
                <span className={`tiret ${animate ? 'is-anim' : ''}`} aria-hidden="true"></span>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="Accueil">
                        <img src={logo} alt="Bootstrap" height="24" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/Accueil" className="nav-link" end>Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/A propos" className="nav-link" end>A propos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Produit' className='nav-link' end>Produits</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink to="/Contact" className="nav-link" end>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Carrière" className="nav-link" end>Carrière</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Partenaires" className="nav-link" end>Partenaires</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Service" className="nav-link" end>Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Evenement" className="nav-link" end>Evènement</NavLink>
                            </li>
                        </ul>

                        <span className="navbar-text ms-auto">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link logo-badge" href="#" aria-label="BRAINOPX">
                                        <img src={logo2}alt="Logo Brainopx" className="logo-badge__img"  height={35} />
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
