import React from 'react';
import './landingpage.css';
import Logo from '../../images/Logo.png';

function landingpage() {
  return (
    <div className="pages">
      <h1>
        Welcome to <br /> FeeFee!
        <img src={Logo} alt="logo" className="logoImg" />
      </h1>
    </div>
  );
}

export default landingpage;
