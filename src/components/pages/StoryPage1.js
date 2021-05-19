import React from 'react';
import Anger1 from '../../components/images/Anger1.png';
const StoryPage1 = (props) => {
  let example_body = localStorage.getItem('example_body');

  return (
    <div className="pages storypages">
      <h3>{example_body}</h3>
      <div className="storyPage1Img">
        <img src={Anger1} alt="emotion" />
      </div>
    </div>
  );
};
export default StoryPage1;
