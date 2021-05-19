import React from 'react';
import Anger1 from '../../components/images/Anger1.png';
const StoryPage1 = (props) => {
	return (
		<div className='pages storypages'>
			<h3>Anger feels like losing your cool.</h3>
			<div className='storyPage1Img'>
				<img src={Anger1} alt='emotion' />
			</div>
		</div>
	);
};
export default StoryPage1;
