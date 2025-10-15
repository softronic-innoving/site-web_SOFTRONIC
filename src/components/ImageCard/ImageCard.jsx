// components/ImageCard/ImageCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ImageCard.css';

/**
 * ImageCard
 * - Affiche une image (carrée par défaut) avec bord arrondi et shadow
 * - Responsive, lazy-loading, accessible
 * - Props: imageSrc (string) required, imageAlt, srcSet(optional), className
 */
export default function ImageCard({
  imageSrc,
  imageAlt = '',
  srcSet = null,      // optional srcset string (for responsive images)
  sizes = '(max-width:600px) 100vw, 25vw', // default sizes hint
  aspectRatio = '1 / 1', // CSS aspect-ratio default square
  borderRadius = '0px',
  shadow = true,
  className = '',
  onClick = null
}) {
  const wrapperClass = `image-card ${shadow ? 'image-card--shadow' : ''} ${className}`;

  return (
    <article className={wrapperClass} role="group" aria-label={imageAlt || 'Image card'}>
      <div
        className="image-card__media"
        style={{ aspectRatio, borderRadius }}
        onClick={onClick}
      >
        {srcSet ? (
          <picture>
            {/* example: browser chooses best candidate from srcSet */}
            <source srcSet={srcSet} sizes={sizes} />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="image-card__img"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="image-card__img"
            loading="lazy"
            decoding="async"
            style={{ borderRadius }}
          />
        )}
      </div>
    </article>
  );
}

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  aspectRatio: PropTypes.string,
  borderRadius: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};
