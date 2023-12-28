import React from 'react';
//the functional component recieves three props
//dateDisplay displays the current month or date
export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    //back and next buttons trigger onNext and onBack
    //onClick is the event handler that enables trhe buttons to work
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onBack} id="backButton">Back</button>
        <button onClick={onNext} id="nextButton">Next</button>
      </div>
    </div>
  );
};