import React from 'react';
import './UserInput2.css';

const UserInput2 = ({userInputs, handleInputChange}) => {
	return (
		<div className='pages'>
			<h3>When I feel angry I:</h3>
			<form>
				<input 
          name={2} 
          value={userInputs[2].text} 
          onChange={handleInputChange} 
          type='text' 
        />
				<input 
          name={3} 
          value={userInputs[3].text} 
          onChange={handleInputChange} 
          type='text' 
        />
				<input 
          name={4} 
          value={userInputs[4].text} 
          onChange={handleInputChange} 
          type='text' 
        />

			</form>
			<p>psst! Keep filling in those blanks!</p>
		</div>
	);
};

export default UserInput2;
