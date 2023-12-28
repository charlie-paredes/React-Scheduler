import React from 'react';

export const ConfirmationPage = ({ date, timeSlot }) => {
  const getTimeSlotLabel = (slot) => {
    if (slot === 'morning') {
      return 'morning';
    } else if (slot === 'afternoon') {
      return 'afternoon';
    } else if (slot === 'evening') {
      return 'evening';
    }
    return '';
  };

  return (
    <div id="confirmationPage">
      <h2>Confirmation</h2>
      <p>Your appointment is confirmed for {date} in the {getTimeSlotLabel(timeSlot)}!</p>
    </div>
  );
};