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
  { title: 'Happy 😀', value: 16, color: '#4FB74D' },
  { title: 'Sad 😟', value: 16, color: '#2063AD' },
];

function FeelingWheel(props) {
  const lineWidth = 85;
  const [selected, setSelected] = useState(0);

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
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
      />
      ;
    </div>
  );
}

export default FeelingWheel;
