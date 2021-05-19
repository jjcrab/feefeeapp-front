import React from 'react';
import Anger1 from '../../components/images/Anger1.png';

const StoryPage1 = (props) => {
	return (

		<div>
			<h3>Story Page 1 Yuck feels like you're sick or need to throw up.</h3>
			<h3>But you aren't sick! Yuck is weird like that.</h3>
		<div className='pages'>
			<h3>Anger feels like losing your cool.</h3>
			<div className='storyPage1Img'>
				<img src={Anger1} alt='emotion' />
			</div>
		</div>
	);
};

export default StoryPage1;
