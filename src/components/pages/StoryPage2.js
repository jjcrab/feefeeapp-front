import React from 'react';
import Anger2_1 from '../../components/images/Anger2_1.png';
import Anger2_2 from '../../components/images/Anger2_2.png';
const StoryPage2 = () => {
	return (
		<div className='pages storypages'>
			<h3>Doug feels angry</h3>
			<img src={Anger2_1} alt='emotion2-1' className='emotion2Img' />
			<h3>when his sister takes his toys</h3>
			<img src={Anger2_2} alt='emotion2-2' className='emotion2Img' />
			<h3>because he wnats to keep playing.</h3>
		</div>
	);
};
export default StoryPage2;
