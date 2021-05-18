import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../src/components/pages/landingPage/landingpage';
import WelcomeScreen from '../src/components/pages/welcomeScreen/welcomeScreen';
import Storypage2 from './components/Storypage2';
import Endpage from './components/Endpage';
import FeelingWheel from './components/pages/feelingWheel';

const delay = 5;

export default function App() {
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
      <FeelingWheel />
      <Storypage2 />
      <Endpage />
    </div>
  ) : (
    <div>
      <LandingPage />
    </div>
  );
}
