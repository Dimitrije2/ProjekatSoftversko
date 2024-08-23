
import React from 'react';
import './Less.css'; // Uvezite CSS za stilizaciju

// Importujte slike
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const Gallery = () => {
    return (
        <div className="gallery">
            <img src={img1} alt="Slika 1" className="gallery-item" />
            <img src={img2} alt="Slika 2" className="gallery-item" />
            <img src={img3} alt="Slika 3" className="gallery-item" />
            <img src={img4} alt="Slika 4" className="gallery-item" />
            <img src={img5} alt="Slika 5" className="gallery-item" />
            <img src={img6} alt="Slika 6" className="gallery-item" />
        </div>
    );
};

export default Gallery;