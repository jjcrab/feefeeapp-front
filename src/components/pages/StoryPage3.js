import React from 'react';
import Anger3_1 from '../../components/images/Anger3_1.png';
import Anger3_2 from '../../components/images/Anger3_2.png';
import Anger3_3 from '../../components/images/Anger3_3.png';
const StoryPage3 = (props) => {
	return (
		<div className='pages storypages'>
			<h3>When Doug feels angry he:</h3>
			<ul>
				<li className='list'>
					<h5>wants to scream!</h5>
					<img src={Anger3_1} alt='action1' className='story3Img' />
				</li>
				<li className='list'>
					<h5>stomps his feet</h5> <img src={Anger3_2} alt='action1' />
				</li>
				<li className='list'>
					<h5>crosses his feet</h5>
					<img src={Anger3_3} alt='action1' />
				</li>
			</ul>
		</div>
	);
};
export default StoryPage3;
