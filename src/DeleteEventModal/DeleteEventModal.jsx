import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        {/* Header for the modal */}
        <h2>Selected Time Slot</h2>

        {/* Display the event text */}
        <p id="eventText">{eventText}</p>

        {/* Button to trigger the onDelete event handler */}
        <button onClick={onDelete} id="deleteButton">Delete</button>
        {/* Button to trigger the onClose event handler */}
        <button onClick={onClose} id="closeButton">Close</button>
      </div>
      
      {/* Backdrop element for the modal */}
      <div id="modalBackDrop"></div>
    </>
  );
};