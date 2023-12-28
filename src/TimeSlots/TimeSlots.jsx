import React, { useState } from 'react';

export const TimeSlots = ({ onSave, onClose }) => {
  //State for 2-hour windows
  const [window, setWindow] = useState('');
  // State for error handling
  const [error, setError] = useState(false);

  return(
    <>
      <div id="TimeSlots">
        <h2>Available Time Slots</h2>

        {/* Input field for entering the Event title ******************/}
        
        {/* Bare-bones buttons for selecting available time slots******************/}
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("8am - 10am")}}>8am - 10am</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("9am - 11am")}}>9am - 11am</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("10am - 12pm")}}>10am - 12pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("11am - 1pm")}}>11am - 1pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("12pm - 2pm")}}>12pm - 2pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("1pm - 3pm")}}>1pm - 3pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("2pm - 4pm")}}>2pm - 4pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("3pm - 5pm")}}>3pm - 5pm</button>
        <button id="availableSlots" value={window} 
        onClick={() => {setWindow("4pm - 6pm")}}>4pm - 6pm</button>
        {/* Button to save the event if the window is not empty ******************/}
        <button 
          onClick={() => {
            if (window) {
              // Reset the error state
              setError(false);
              // Call the onSave event handler with the selected window
              onSave(window);
            } else {
            // Set the error state if the selected window is empty
              setError(true);
            }
          }} 
          id="saveButton">
            Save
            </button>

        {/* Button to close the modal without saving ******************/}
        <button 
          onClick={onClose}
          id="cancelButton">
            Cancel
            </button>
      </div>

      {/* Backdrop element for the modal ******************/}
      <div id="modalBackDrop"></div>
      
    </>
  );
};