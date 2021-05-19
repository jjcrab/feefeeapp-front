import React from 'react';
import './landingpage.css';
import Logo from '../../images/Logo.png';

function landingpage() {
  return (
      <div className='pages landingContainer'>
          <div className='landingTitle'>
              <h1>
                  Welcome to <br /> FeeFee!
              </h1>
          </div>
          <div className='logodiv'>
              <img src={Logo} alt='logo' className='logoImg' />
          </div>
      </div>
  );
}

export default landingpage;
