import React from 'react';
import '../styles/Evenement.css';
import Header from '../components/Header/Header';
import EventCard from '../components/EventCard/EventCard';
import TextImageBackground from '../components/TextImageBackground/TextImageBackground';
import ImageCard from '../components/ImageCard/ImageCard';
import brainopxLogo from '../assets/brainopx.png';
import event1 from '../assets/Event1.png';
import event2 from '../assets/Event2.png';
import event3 from '../assets/Event3.png';
import event4 from '../assets/Event4.png';
import event5 from '../assets/Event5.png';
import event6 from '../assets/Event6.png';
import event7 from '../assets/Event7.png';
import event8 from '../assets/Event8.png';
import event9 from '../assets/Event9.png';
import event10 from '../assets/Event10.png';

export default function Evenement() {
  const show = true;

  // Tableau de données pour EventCard
  const events = [
    {
      id: 1,
      image: event2,
      alt: 'Photo événement 1',
      title: 'Fête du travail',
      paragraphs: [
        'Softronic rend hommage à tous les travailleurs à l\'occasion de la Fête du Travail.',
        'Merci pour votre engagement et votre passion.'
      ]
      // eventDate omitted => 1er mai this year
    },
    {
      id: 2,
      image: event1,
      alt: 'Photo événement 2',
      title: 'Soirée Innov',
      paragraphs: [
        'Retour sur notre soirée dédiée aux startups.',
      ],
      eventDate: new Date(new Date().getFullYear(), 6, 15) // exemple
    },
    {
      id: 3,
      image: event2,
      alt: 'Photo événement 3',
      title: 'Atelier IA',
      paragraphs: [
        'Atelier pratique sur l\'IA appliquée au business.'
      ]
    }
  ];

   // tableau 1 centralisé des images (id + meta) -> maintenable
  const images = [
    {
      id: 'event3',
      src: event3,
      alt: 'Table dressée pour événement',
    },
    {
      id: 'event4',
      src: event4,
      alt: 'Deux personnes en costume lors d’une cérémonie',
      // srcSet: null,
    },
    {
      id: 'event5',
      src: event5,
      alt: 'Décor de table et bougies pour soirée',
    },
    {
      id: 'event6',
      src: event6,
      alt: 'Longue table extérieure prête pour dîner',
    }
  ];

  
   // tableau 2 centralisé des images (id + meta) -> maintenable
  const images2 = [
    {
      id: 'event8',
      src: event8,
      alt: 'photographe pour événement',
    },
    {
      id: 'event9',
      src: event9,
      alt: 'Décor de table pour une cérémonie',
      // srcSet: null,
    },
    {
      id: 'event10',
      src: event10,
      alt: 'Deux amis se rencontrent à un événement',
    },
    {
      id: 'event6second',
      src: event6,
      alt: 'Longue table extérieure prête pour dîner',
    }
  ];

  return (
    <>
      {/* le header de page  */}
      <Header
        message={
            <div className="evenement-message">
            <p className="mb-1">Nos</p>
            <p>
                <span className="titre">Évènements</span>
            </p>
            <p className="mb-1">
                Participez à nos évènements, vivez l’innovation de l’intérieur.
            </p>
            <p className="mb-1">
                 Conférences, ateliers, lancements de produits… Softronic 
            </p>
            <p className="mb-1">
                vous ouvre les portes de la technologie en action.
            </p>
            
            </div>
        }
        backgroundImage={event1}
        logo={brainopxLogo}
        isShow={show}
        bshow={show}
      />

       {/* title important de la page  */}
        <div className="title">
            <h2>Evènement avenir</h2>
            <div className="divider"></div>
        </div>

     {/* Gestion de EventCard  */}
        {/* SECTION 1  */}
        <section className="container py-3">
            <div className="row gx-4 gy-4">
                {events.map(ev => (
                    <div key={ev.id} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
                        <EventCard
                            imageSrc={ev.image}
                            imageAlt={ev.title}
                            title={ev.title}
                            paragraphs={ev.paragraphs}
                            eventDate={ev.eventDate}
                            onClick={() => console.log('open event', ev.id)}
                            className="w-100"
                        />
                    </div>
                ))}
            </div>
        </section>
        {/* SECTION 2  */}
        <section className="container py-5">
            <div className="row gx-4 gy-4">
                {events.map(ev => (
                    <div key={ev.id} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
                        <EventCard
                            imageSrc={ev.image}
                            imageAlt={ev.title}
                            title={ev.title}
                            paragraphs={ev.paragraphs}
                            eventDate={ev.eventDate}
                            onClick={() => console.log('open event', ev.id)}
                            className="w-100"
                        />
                    </div>
                ))}
            </div>
        </section>

        {/* title important de la page  */}
        <div className="title">
            <h2>Evènement passé</h2>
            <div className="divider"></div>
        </div>
      {/* Gestion de TextImageBackground  */}
        {/* SECTION 1  */}
       <section className='container py-3'>
            <TextImageBackground
                imageSrc={event1}
                imageAlt="Fête - foule qui danse"
                maxWidth="1260px"
                height="220px"
                overlay="linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35))"
                childrenTop={(
                <h1 className="banner-title">Le gout de la fete</h1>
                )}
                childrenBottom={(
                <>
                    <p className="lead">Un grand merci à tous pour votre présence !</p>
                    <p>La fête organisée par Softronic a été un véritable</p>
                    <p>moment de partage, de joie et de convivialité.</p>
                </>
                )}
            />
       </section>
    
      {/* Gestion de ImageCard  */}
        {/* SECTION 1  */}
       <section className="container pb-1">
            <div className="image-grid image-grid--4">
                {images.map((img, idx) => (
                <ImageCard
                    key={idx}
                    imageSrc={img.src}
                    imageAlt={img.alt}
                    srcSet={img.srcSet}
                    sizes="(max-width:600px) 100vw, 25vw"
                />
                ))}
            </div>
       </section>

     {/* Gestion de TextImageBackground  */}
        {/* SECTION 2  */}
       <section className='container pb-1'>
            <TextImageBackground
                imageSrc={event7}
                imageAlt="Fête - foule qui danse"
                maxWidth="1260px"
                height="220px"
                overlay="none"
                childrenTop={(
                <h1 className="banner-title">Le gout de la fete</h1>
                )}
                childrenBottom={(
                <>
                    <p className="lead">Un grand merci à tous pour votre présence !</p>
                    <p>La fête organisée par Softronic a été un véritable</p>
                    <p>moment de partage, de joie et de convivialité.</p>
                </>
                )}
            />
       </section>

     {/* Gestion de ImageCard  */}
        {/* SECTION 2  */}
       <section className="container pb-1">
            <div className="image-grid image-grid--4">
                {images2.map((img, idx) => (
                <ImageCard
                    key={idx}
                    imageSrc={img.src}
                    imageAlt={img.alt}
                    srcSet={img.srcSet}
                    sizes="(max-width:600px) 100vw, 25vw"
                />
                ))}
            </div>
       </section>
       

    </>
  );
}


