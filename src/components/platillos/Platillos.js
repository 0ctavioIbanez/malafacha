import React from 'react';
import Platillo from './Platillo';
import './platillos.css';

const Platillos = () => {
  return (
    <section className="platillos">
      <div className="container">
        <h1 className="titulo font-2">Platillos</h1>
        <div className="flex card-container">
          <Platillo />
        </div>
      </div>
    </section>
  );
}
export default Platillos;
