import React from 'react';

import demo from '../../img/demo.jpeg';

const Platillo = () => {


  return (
    <div className="card">
      <div>
        <img src={demo} alt="platillo" />
      </div>
      <div className="card-text">
        <h3 className="flex">Enchiladotas <span>$55.00</span></h3>
        <p className="font-1">lorem ipsum dolor it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default Platillo;
