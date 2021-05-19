import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../src/components/pages/landingPage/landingpage';
import WelcomeScreen from '../src/components/pages/welcomeScreen/welcomeScreen';
import Storypage2 from './components/Storypage2';
import Endpage from './components/Endpage';

const delay = 5;

export default function App() {
	const [show, setShow] = useState(false);
  const [userInputs, setUserInputs] = useState(
    [
      {text:''},
      {text:''},
      {text:''},
      {text:''},
      {text:''},
      {text:''},
    ]
  );

  const handleInputChange = (evt) => {
    let newInput = [...userInputs]
    newInput[evt.target.name] = {text:evt.target.value}
    setUserInputs(newInput)
    console.log(newInput)
  }

	useEffect(() => {
		let timer1 = setTimeout(() => setShow(true), delay * 1000);
		return () => {
			clearTimeout(timer1);
		};
	}, []);


	return (
    <div>
      <input name={0} value={userInputs[0].text} onChange={handleInputChange}></input>
      <input name={1} value={userInputs[1].text} onChange={handleInputChange}></input>
      show ? (
      <div>
        <WelcomeScreen />
      </div>
    ) : (
      <div>
        <LandingPage />
        <Storypage2 />
        <Endpage />
      </div>
    </div>
	);
}
