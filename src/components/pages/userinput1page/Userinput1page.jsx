import React from 'react';
import './userinput1page.css';

export default function Userinput1page() {
  
  //Need the emotion name from the API call.

  return (
    <div className="pages">  
      <div class="centered">
        {/* We will have to add the interpolation for the emotion below */}
        {/* <h1 id="inputs">I feel {emotion.name}</h1> */}
        <h1 id="inputs">I feel yuck </h1>
        <br />
        <div class="flex-space-between">
          <h1>When</h1><input type="text"></input>
        </div>
        <br />
        <div class="flex-space-between">
          <h1>because</h1>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}
