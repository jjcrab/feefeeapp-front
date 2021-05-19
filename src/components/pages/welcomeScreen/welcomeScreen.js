import React from 'react';
import './welcomeScreen.css';
import Alex from '../../images/Alex.png';
import Doug from '../../images/Doug.png';

function welcomeScreen() {
	return (
		<div className='grid-container welcomescreen pages'>
			<div className='h1'>This is Doug and Alex</div>
			<div className='welcomeImgs'>
				<img src={Doug} alt='Doug' className='Doughimg' />
				<img src={Alex} alt='Alex' className='Aleximg' />
			</div>
			<div className='h11'>Your feelings pals</div>
			<div className='h2'>They feels what you feel</div>
		</div>
	);
}
export default welcomeScreen;


