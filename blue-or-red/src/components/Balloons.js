import React, { useEffect, useState } from 'react';

const Balloons = () => {
  const [balloonColour, setBalloonColour] = useState('');
  const [checkedCookies, setCheckedCookies] = useState(false);

  //This function will assign red or blue at rendom for the users to see
  const randoColour = () => {
    let colour = Math.floor(Math.random(2)) === 1 ? 'blue' : 'red';
    //console.log(colour)
    document.cookie = `colour=${colour}`;
    return colour;
  };

  //This will check to see if there is a colour already set in the users cookies, meaning it's not the first time they visited the page in that browser and we want to keep showing them the same colour
  const cookieCheck = () => {
    let cookieColour = document.cookie
      .toString()
      .split(';')
      .filter((cookie) => cookie.includes('colour'));
    if (cookieColour.length) {
      setBalloonColour(
        cookieColour.toString().includes('blue') ? 'blue' : 'red'
      );
    } else {
      setBalloonColour(randoColour());
    }
  };

  //I want to run the cookieCheck function as soon as the page loads so I know what colour to show the user or generate a random one
  useEffect(() => {
    if (!checkedCookies) {
      setCheckedCookies(true);
      cookieCheck();
    }
  }, []);

  return (
    <>
      {balloonColour === 'red' ? (
        <img
          src='https://images.unsplash.com/photo-1644896408484-f58e6bf9b7ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlZCUyMGJhbGwlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='a very grumpy cat being help up by red heart shaped balloons'
        />
      ) : (
        <img
          src='https://images.unsplash.com/photo-1499781749692-e8274262c718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='marbled blue balloons in front of a white brick wall'
        />
      )}
      <div className={balloonColour === 'blue' ? 'blueText': 'redText'}>
      {`Congratulations! You got ${balloonColour} balloons!`}
      </div>
    </>
  );
};

export default Balloons;
