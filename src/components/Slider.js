import React from 'react';
import StoryPage1 from './pages/StoryPage1';
import StoryPage2 from './pages/StoryPage2';
import StoryPage3 from './pages/StoryPage3';
import UserInput2 from './pages/UserInput2';
import UserInput1Page from './pages/userinput1page/Userinput1page'
import Input3 from './pages/Input3';
import Endpage from './pages/Endpage';

import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
	return (
		<div>
			<Carousel interval={null} className='slider'>
				<Carousel.Item>
					<FeelingWheel />
				</Carousel.Item>
				<Carousel.Item>
					<StoryPage1 />
				</Carousel.Item>
				<Carousel.Item>
					<StoryPage2 />
				</Carousel.Item>
				<Carousel.Item>
					<StoryPage3 />
				</Carousel.Item>
				<Carousel.Item>
					<UserInput1Page />
				</Carousel.Item>
				<Carousel.Item>
					<UserInput2 />
				</Carousel.Item>
				<Carousel.Item>
					<Input3 />
				</Carousel.Item>
				<Carousel.Item>
					<Endpage />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Slider;
