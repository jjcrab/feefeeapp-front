import React from 'react';
import Anger3_1 from '../../components/images/Anger3_1.png';
import Anger3_2 from '../../components/images/Anger3_2.png';
import Anger3_3 from '../../components/images/Anger3_3.png';

const StoryPage3 = (props) => {
	return (
<<<<<<< HEAD
		<div>
			<h3>Story Page 3</h3>
			<p>When Doug feels angry he:</p>
=======
		<div className='pages'>
			<h3>When Doug feels angry he:</h3>

>>>>>>> dev2
			<ul>
				<li>
					wants to scream! <img src={Anger3_1} alt='action1' />
				</li>
				<li>
					stomps his feet <img src={Anger3_2} alt='action1' />
				</li>
				<li>
					crosses his feet
					<img src={Anger3_3} alt='action1' />
				</li>
			</ul>
		</div>
	);
};

export default StoryPage3;
