import React from 'react';
//recieves two props: day and onClick
export const Day = ({ day, onClick }) => {
    //className dynamically creates CSS classes based on the 'day' object properties
    
    const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
    return (
        //if day's value is 'padding', an empty string is rendered,
        //otherwise the day value is displayed.

        //if day has an 'event' property, the CSS class 'event' is rendered,
        //to display the event title.
        <div onClick={onClick} className={className}>
            {day.value === 'padding' ? '' : day.value}

            {day.event && <div className='event'>{day.event.title}</div>}
        </div>
    );
};