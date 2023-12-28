import React, { useState, useEffect } from 'react';
import { CalendarHeader } from '../CalendarHeader';
import { Day } from '../Day';
import { TimeSlots } from '../TimeSlots';
import { DeleteEventModal } from '../DeleteEventModal';
import { useDate } from '../hooks/useDate';

export const App = () => {
  //navigation state of the calendar
  const [nav, setNav] = useState(0);
  //this stores the clicked state
  const [clicked, setClicked] = useState();
  //state variables tracking whether a time slot is selected, and the value of it
  const [timeSlotSelected, setTimeSlotSelected] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  //this retrieves events from localStorage or initializes it as an empty array
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  // Finds the event object corresponding to a given date
  const eventForDate = date => events.find(e => e.date === date);
  
  // Saves events to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Custom hook to generate the calendar days and date display
  const { days, dateDisplay } = useDate(events, nav);

  return(
    <>
      <div id="container">
        <CalendarHeader 
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== 'padding') {
                  // Sets the clicked date when a valid day is clicked
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {
        // Renders the TimeSlots modal if a date is clicked and no event exists for that date******************************************
        clicked && !eventForDate(clicked) && !timeSlotSelected &&
        <TimeSlots
          onClose={() => setClicked(null)}
          onSave={title => {
            // Adds a new event for the clicked date
            setEvents([ ...events, { title, date: clicked }]);
            // Clears the clicked date state
            setClicked(null);
            setTimeSlotSelected(true);
            setSelectedTimeSlot(title);
          }}
        />
      }

      {
        // Renders the DeleteEventModal if a date is clicked and an event exists for that date******************************************
        clicked && eventForDate(clicked) &&
        <DeleteEventModal 
          // Passes the event title to the modal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            // Deletes the event for the clicked date
            setEvents(events.filter(e => e.date !== clicked));
            // Clears the clicked date state
            setClicked(null);
            setTimeSlotSelected(false);
          }}
        />
      }

      {
       //section where customers can input what they want removed after choosing a timeslot******************************************
       timeSlotSelected&&(
        <>
        <h3>List the items you would like removed</h3>
        <input
          id="itemsRemoved"
          
          onChange={e => setSelectedTimeSlot(e.target.value)}
          placeholder="eg., a reclining chair and nightstand in my bedroom"
          />
        </>
       )
      }
    </>
  );
};