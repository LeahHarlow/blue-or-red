import React, { useState } from 'react';
import Modal from './Modal';

const UserReport = () => {
  const [timesVisited, setTimesVisited] = useState(0);
  const [showModal, setModalIsShowing] = useState(false);
  const [plural, setPlural] = useState(false);

  //this function will find the cookie created to track the number of times a user has visited this page in their browser and parse the cookie string for the number of times the user saw either colour and set it to state
 const parceTimesVisited = () => {
    let cookieVisits = document.cookie
      .toString()
      .split(';')
      .filter((cookie) => cookie.includes('timesVisited'));
    let str = cookieVisits[0];
    str = str.split('');
    let cut = str.indexOf('=');
    let num = str.slice(cut + 1);
    if (num.length > 1 || num > 1) {
      num = num.join('');
      setPlural(true);
    } else{
      setPlural(false);
    }
    //console.log(num[0])
    setTimesVisited(num[0]);
  };

  //function to increase the value of the cookie tracking the number of times a user visited the page
  const upCookieCount = () => {
    console.log(timesVisited)
    document.cookie = `timesVisited=${timesVisited+1}; expires=` + new Date(2023, 0, 1).toUTCString();
    parceTimesVisited();
  }

  //function to run when generate report is clicked that will pop up modal and propogate with the number of times the user has visited the page
  const generateUserReport = () => {
    parceTimesVisited();
    setModalIsShowing(true);
    upCookieCount();
  };

  //function to clear cookies from Modal?

  return (
    <>
      <button onClick={() => generateUserReport()}>
        Click For User Report
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setModalIsShowing(false);
          }}
        >
          <div id="modal">
            {`You've seen this beautiful picture ${timesVisited} time${plural === true ? 's' : ''}!`}
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserReport;
