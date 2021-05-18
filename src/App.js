import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../src/components/pages/landingPage/landingpage';
import WelcomeScreen from '../src/components/pages/welcomeScreen/welcomeScreen';
import Storypage2 from './components/Storypage2';
import Endpage from './components/Endpage';
import FeelingWheel from './components/pages/feelingWheel';
import Slider from './components/Slider';

import 'bootstrap/dist/css/bootstrap.css';

const delay = 5;

const changes = 5

const apiLocal = 'http://localhost:4000/api/emotion/'

const apiHeroku = 'https://feelings-api1.herokuapp.com/api/emotion'

export default function App() {
	
	//FETCH EMOTION STORY
	const [emotion, setEmotion] = useState(null)

	const getStory = async (emotionName) => {
		const response = await fetch(apiLocal + {emotionName},{
			headers: {Accept: "application/json"}
		})
		const data = await response.json()
		setEmotion(data)
	}
	
	//TIMER DELAY WELCOME PAGE TO LANDING PAGE
	const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

	return show ? (
		<div>
			<WelcomeScreen />
			<Slider />
		</div>
	) : (
		<div>
			<LandingPage />
<<<<<<< HEAD
			<Storypage2 getStory={getStory}/>
			<Endpage />
=======
>>>>>>> 7e5a675 (Carousel)
		</div>
	);
}
