import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../src/components/pages/landingPage/landingpage';
// import WelcomeScreen from '../src/components/pages/welcomeScreen/welcomeScreen';
// import FeelingWheel from './components/pages/feelingWheel';
import Slider from './components/Slider';

import 'bootstrap/dist/css/bootstrap.css';

const delay = 5;

const changes = 5;

const apiLocal = 'http://localhost:4000/api/emotion/';

const apiHeroku = 'https://feelings-api1.herokuapp.com/api/emotion/';
const apiHerokuAll = 'https://feelings-api1.herokuapp.com/api/all';

export default function App() {
  //FETCH EMOTION STORY
  const [emotion, setEmotion] = useState(null);

  const getStory = async (emotionId) => {
    const response = await fetch(apiHeroku + emotionId, {
      headers: { Accept: 'application/json' },
    });
    const data = await response.json();
    // const randomStory = 1 + Math.floor((Math.random() * 2));
    // console.log(randomStory)
    console.log(data.rows);

    setEmotion(data);
  };

  const getAllStories = async () => {
    const response = await fetch(apiHerokuAll, {
      headers: { Accept: 'application/json' },
    });
    console.log(response.json());
  };

  //TIMER DELAY WELCOME PAGE TO LANDING PAGE
  const [show, setShow] = useState(false);
  const [userInputs, setUserInputs] = useState([
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ]);

  const handleInputChange = (evt) => {
    let newInput = [...userInputs];
    newInput[evt.target.name] = { text: evt.target.value };
    setUserInputs(newInput);
    console.log(newInput);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 400);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return show ? (
    <div>
      <Slider userInputs={userInputs} handleInputChange={handleInputChange} />
    </div>
  ) : (
    <div>
      <LandingPage />
    </div>
  );
}
