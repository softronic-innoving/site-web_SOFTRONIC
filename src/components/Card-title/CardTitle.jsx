import React from 'react'
import '../../styles/CardTitle.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardTitle = ({ icon, title }) => {
  return (
    <div className="icon-card">
      <span>{title}</span>
      {icon}
    </div>
  );
};

export default CardTitle
