// components/TextImageBackground/TextImageBackground.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/TextImageBackground.css';

export default function TextImageBackground({
  imageSrc,
  imageAlt = '',
  maxWidth = '1200px',
  height = '280px',
  overlay = 'none',   // <- par défaut, pas de voile
  childrenTop = null,
  childrenBottom = null,
  paragraphGap = '6px',       // <-- espacement entre <p>
  titleBottomSpace = '32px',  // <-- espace entre h1 et les paragraphes
  className = ''
}) {
  const style = {
    '--bg-image': `url(${imageSrc})`,
    '--banner-max-width': maxWidth,
    '--banner-height': height,
    '--banner-overlay': overlay,
    '--banner-paragraph-gap': paragraphGap,
    '--banner-title-bottom-space': titleBottomSpace,
  };

  return (
    <section
      className={`text-image-bg ${className}`}
      style={style}
      role="region"
      aria-label={imageAlt || 'Bannière'}
    >
      <div className="bg-box">
        <div className="bg-overlay" aria-hidden="true" />
        <div className="bg-content">
          <div className="bg-top">{childrenTop}</div>
          <div className="bg-bottom">{childrenBottom}</div>
        </div>
      </div>
    </section>
  );
}

TextImageBackground.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  overlay: PropTypes.string,
  childrenTop: PropTypes.node,
  childrenBottom: PropTypes.node,
  paragraphGap: PropTypes.string,
  titleBottomSpace: PropTypes.string,
  className: PropTypes.string,
};
