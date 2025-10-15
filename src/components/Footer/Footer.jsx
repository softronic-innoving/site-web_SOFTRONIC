import React, { useState } from 'react'
import '../../styles/Footer.css'
import logofooter from '../../assets/logo-footer.png'
import partenaire from '../../assets/partenaire.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div className='container-fluid footer'>
                <div className="row">
                    <div className="col-3">
                        <img src={logofooter} width={190} alt="" srcset="" />
                    </div>
                    <div className="col-6">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">A propos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Produits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrière</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Partenaires</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row ">
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="partenaire">Partenaires :</a>
                            </li>
                            <li className="nav-item">

                                <img src={partenaire} width={100} alt="alt" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mb-3"> 
                        <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
                    </div>

                </div>
            </div>
            {/* <div className="footer-head" style={{ zIndex: 1040 }}>
                <span className="tiret2"></span>
            </div> */}
        </>
    )
}

export default Footer
