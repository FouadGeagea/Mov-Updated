import React from 'react';
import movieLogo from '../../images/download.png';
import './Logo.css';

const logo = () => (
    <div className="Logo">
        <img src={movieLogo} alt="Logo" />
    </div>
);
export default logo;