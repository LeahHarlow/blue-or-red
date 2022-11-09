import React, { useState } from 'react';

const UserReport = () => {
  const [timesVisited, setTimesVisited] = useState();

  const generateUserReport = () => {
    let cookieVisits = document.cookie
      .toString()
      .split(';')
      .filter((cookie) => cookie.includes('timesVisited'));
    if (timesVisited.length) {
      setTimesVisited(cookieVisits.toString());
    }
  };

  return (
    <>
      <button>Click For User Report</button>
    </>
  );
};

export default UserReport;
