import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const data = [
  {
    title: 'Anger 😠',
    value: 16,
    color: '#C4C4C4',
  },
  { title: 'Fear 😨', value: 16, color: '#C4C4C4' },
  { title: 'Surprise 😲', value: 16, color: '#C4C4C4' },
  { title: 'Yuck 🤮', value: 16, color: '#C4C4C4' },
  { title: 'Joy 😀', value: 16, color: '#C4C4C4' },
  { title: 'Sadness 😟', value: 16, color: '#C4C4C4' },
];

function FeelingWheel({ setEmotion }) {
  const lineWidth = 85;
  let emotionWord;

  const getStory = async (emotionId) => {
    const word = {
      fear: 1,
      anger: 2,
      joy: 3,
      sadness: 4,
      yuck: 5,
      surprise: 6,
    };

    let apiHeroku = `https://feelings-api1.herokuapp.com/api/emotion/${word[emotionId]}`;
    const response = await fetch(apiHeroku, {
      headers: { Accept: 'application/json' },
    });

    const data = await response.json();
    // const randomStory = 1 + Math.floor((Math.random() * 2));
    // console.log(randomStory)
    // console.log(data, 'sss');

    setEmotion(data);
  };

  return (
    <div>
      <h1 id="container">
        How are you feeling <br /> today?
      </h1>
      <PieChart
        lineWidth={99.9}
        radius={PieChart.defaultProps.radius - 8}
        label={({ dataEntry }) => dataEntry.title}
        data={data}
        labelStyle={{
          fill: 'black',
          opacity: 1,
          pointerEvents: 'none',
          fontSize: '5px',
          fontWeight: 'bold',
        }}
        labelPosition={100 - lineWidth / 2}
        onClick={(e) => {
          emotionWord = e.target.textContent.toLowerCase().split(' ')[0];
          getStory(emotionWord);
          setEmotion(emotionWord);
          let nextPage = document.querySelector('carousel-control-next');
          // console.log(emotion, 'final');
        }}
      />
      ;
    </div>
  );
}

export default FeelingWheel;
