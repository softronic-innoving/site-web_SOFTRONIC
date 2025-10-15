// components/EventCard/EventCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/EventCard.css';

export default function EventCard({
  imageSrc,
  imageAlt = 'Image évènement',
  title,
  paragraphs = [],
  eventDate = null,
  onClick = null,
  className = ''
}) {
  const date = eventDate instanceof Date
    ? eventDate
    : new Date(new Date().getFullYear(), 4, 1); // 1er mai par défaut

  const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <article className={`event-card ${className}`} aria-label={`Évènement ${title}`}>
      <div className="event-image-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="event-image"
          loading="lazy"
          decoding="async"
        />

        {/* small blue badge overlay */}
        <div className="info-badge" role="group" aria-label={`Information ${title}`}>
          <div className="badge-header">
            <span className="badge-dot" aria-hidden="true"></span>
            <strong className="badge-title">{title}</strong>
          </div>

          <div className="badge-body">
            {paragraphs.map((t, i) => (
              <p key={i} className="badge-paragraph">{t}</p>
            ))}
            <p className="badge-date">{formattedDate}</p>
          </div>
        </div>

        {/* whole image clickable if onClick provided (keeps semantics: button for JS handler) */}
        {onClick ? (
          <button className="click-overlay" onClick={onClick} aria-label={`Ouvrir ${title}`} />
        ) : null}
      </div>

      {/* Optionnel : si tu veux un petit texte en dessous de la carte, tu peux l'ajouter ici */}
    </article>
  );
}

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  eventDate: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  className: PropTypes.string
};
