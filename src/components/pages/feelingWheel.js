import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const data = [
  {
    title: 'Anger 😠',
    value: 16,
    color: '#e5222d',
  },
  { title: 'Fear 😨', value: 16, color: '#F49132' },
  { title: 'Surprise 😲', value: 16, color: '#FBE840' },
  { title: 'Yuck 🤮', value: 16, color: '#61328F' },
  { title: 'Joy 😀', value: 16, color: '#4FB74D' },
  { title: 'Sadness 😟', value: 16, color: '#2063AD' },
];

function FeelingWheel({ setEmotion, emotion }) {
  const lineWidth = 85;
  let emotionWord;

  const [selected, setSelected] = useState(0);
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
    <div id="container">
      <h3>
        How are you feeling <br /> today?
      </h3>
      <PieChart
        lineWidth={99.9}
        radius={PieChart.defaultProps.radius - 15}
        label={({ dataEntry }) => dataEntry.title}
        data={data}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        labelStyle={{
          fill: 'black',
          opacity: 1,
          pointerEvents: 'none',
          fontSize: '5px',
          fontWeight: 'bold',
        }}
        labelPosition={100 - lineWidth / 2.4}
        onClick={(e, index) => {
          e.preventDefault();
          setSelected(index);
          emotionWord = e.target.textContent.toLowerCase().split(' ')[0];
          getStory(emotionWord);
          setEmotion(emotionWord);
          console.log(emotion, emotionWord);
          localStorage.setItem('example_body', emotion.rows[0].example_body);
          // localStorage.setItem(
          //   'char_example_body',
          //   emotion.rows[0].char_example_body
          // );
          // localStorage.setItem('bullet_body', emotion.rows[0].bullet_body);
        }}
      />
      ;
    </div>
  );
}

export default FeelingWheel;
