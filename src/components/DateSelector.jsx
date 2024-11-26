import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Components.scss"

function DateSelector() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <DatePicker 
                className='dateselector'
                selected={selectedDate} 
                onChange={(date) => setSelectedDate(date)} 
                dateFormat="yyyy-MM-dd" 
                placeholderText="Today"
            />
            {/* {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>} */}
        </div>
    );
}

export default DateSelector;