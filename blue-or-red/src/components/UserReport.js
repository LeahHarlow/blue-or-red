import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const UserReport = () => {
  const [showModal, setModalIsShowing] = useState(false);
  const [timesVisited, setTimesVisited] = useState(0);
 const [plural, setPlural] = useState(false);

  //function to increase the value of the timesVisited cookie, tracking the number of times a user viewed the page in the same browser or without clearing their cookies
  const upCookieCount = () => {
    let cookieVisits = document.cookie
      .toString()
      .split(';')
      .filter((cookie) => cookie.includes('timesVisited'));
    let str = cookieVisits[0];
    str = str.split('');
    let cut = str.indexOf('=');
    let num = str.slice(cut + 1);
    let joinedNum = num.join('');
    let int = parseInt(joinedNum)
    console.log(typeof(int), "<----- int")
    if(int > 1) setPlural(true);
    document.cookie =
      `timesVisited=${++int}; expires=` +
      new Date(2023, 0, 1).toUTCString();
      setTimesVisited(int)
  };

  //function to run when generate report is clicked that will pop up modal and propogate with the number of times the user has visited the page
  const generateUserReport = () => {
    setModalIsShowing(true);
  };

  useEffect(() => {
    if (
      !document.cookie
        .toString()
        .split(';')
        .filter((cookie) => cookie.includes('timesVisited'))
    ) {
      document.cookie =
        'timesVisited=1; expires=' + new Date(2025, 0, 1).toUTCString();
    } else {
      upCookieCount();
    }
  }, []);

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
          <div id='modal'>
            {`You've seen this beautiful picture ${timesVisited} time${
              plural === true ? 's' : ''
            }!`}
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserReport;
