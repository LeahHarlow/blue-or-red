import React, { useEffect } from 'react';

const Balloons = () => {

  const randoColour = () => {
    return Math.floor(Math.random(2)) === 1 ? 'blue' : 'red';
  };

  const cookieCheck = () => {
    if (document.cookie) {
      let cookieColour = document.cookie
        .toString()
        .split(';')
        .filter((cookie) => cookie.includes('colour'));
      return cookieColour.includes('blue') ? 'blue' : 'red';
    } else {
      randoColour();
    }
  };

  useEffect(()=> {
    cookieCheck();
  })

  return (
<div>Balloons</div>
  );
};

export default Balloons;
