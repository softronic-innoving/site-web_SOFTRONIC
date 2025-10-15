import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header/Header';
import brainopxLogo from '../assets/brainopx.png';
import backgroundImage from '../assets/contact.svg';

function Contact() {
    let textline = false;
  
    return (
        <>
         {/* le header de la page  */}
            <Header message={
                <>
                    Une question, un projet ou une <br />
                    collaboration ? Parlons-en ! <br />
                    Nous sommes à votre écoute.
                </>
            }
                backgroundImage={backgroundImage}
                logo={brainopxLogo}
                textline={textline}
            />

         {/* title important de la page  */}
            <div className="title">
                <h2>Contactez nous maintenant</h2>
                <div className="divider"></div>
            </div>

         {/* paragraphe  */}
            <div className="container paragrahe">
                L’équipe Softronic est à votre écoute pour vous accompagner et répondre à toutes vos préoccupations.
                Que ce soit pour en savoir plus sur notre logiciel Brainopx, discuter d’un partenariat ou demander
                une assistance, nous sommes disponibles et réactifs. Remplissez le formulaire ou contactez-nous directement.
                Nous reviendrons vers vous dans les plus brefs délais.
            </div>

         {/* Formulaire, carte de mappage, localisation SOFTRONIC INNOVING  */}
            <div className="containers my-5">
                {/* Formulaire et Carte */}
                <div className="row" id='row'>
                    {/* Formulaire */}
                    <div className="col-md-7 mb-4" id='formulaire'>
                        <form className="form">
                            
                             {/* Champ Nom & Prénom*/}
                            <div className="row mb-3">
                                
                                {/* Champ Nom */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" className="form-control" id="nom" />
                                    </div>
                                </div>

                                {/* Champ Prénom */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="prenom">Prénom</label>
                                        <input type="text" className="form-control" id="prenom" />
                                    </div>
                                </div>
                            </div>

                            {/* Champ Téléphone & Adresse email*/}
                            <div className="row mb-3">

                                 {/* Téléphone */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="telephone">Téléphone</label>
                                        <input type="tel" className="form-control" id="telephone" />
                                    </div>
                                </div>

                                 {/* Adresse email */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                </div>
                            </div>

                            {/* Champ Objectif*/}
                            <div className="mb-3">
                                <div className="form-group">
                                    <label htmlFor="objectif">Objectif</label>
                                    <input type="text" className="form-control" id="objectif" />
                                </div>
                            </div>

                            {/* Champ Message*/}
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="4" />
                            </div>

                            {/* button*/}
                            <div className="button">

                                <button type="submit" className="btn btn-primary">Envoyer le message</button>
                            </div>
                        </form>
                    </div>

                    {/* Carte */}
                    <div className="col-md-5" >
                        <div style={{ height: 'auto' }}>
                            <iframe
                                id="carte"
                                title="Carte Douala PK12 Ngo Joh"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9702847211976!2d9.7347796!3d4.0507045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610f4f8f05b8f7%3A0x3e44fabc8b3ef92!2sPK%2012%20Ngo%20Joh%2C%20Douala!5e0!3m2!1sfr!2scm!4v1726223500000"
                                width="100%"
                                height="600"
                                style={{ border: 0, borderRadius: "10px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>

                {/* Localisation SOFTRONIC INNOVING */}
                <div className='row' id='localisation'>
                  {/* Adresse et Téléphone  */}
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-start gap-3 gap-md-4 gap-lg-5 mt-3">
                      {/* Adresse */}
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="me-2 text-primary fa-1x" />
                            <span className='fs-5'>Douala, PK 12 Ngo Joh</span>
                        </div>

                      {/* Téléphone */}
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPhone} className="me-2 text-primary fa-1x" />
                            <span className='fs-5'>+237 699 888 844</span>
                        </div>
                    </div>
                </div>
            </div>


         {/* Titre sur l'image */}
            <div className="section2">
                <h4>Tout commence par une question</h4>
                <h4>et toute question a une reponse</h4>
            </div>
        </>
    )
}

export default Contact