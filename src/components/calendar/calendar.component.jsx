import React, { useState } from "react";
import {format, startOfWeek, addDays, startOfMonth
,endOfMonth,
endOfWeek,
isSameMonth,
parse,
isSameDay,
addMonths,
subMonths,
toDate
} 
from "date-fns";
import './calendar.styles.scss';
const Calendar = () => {
const [currentDate, setCurrentDate] = useState(new Date());
const [selectedDate, setSelectedDate] = useState(new Date());

const DR_DATA = [{
    date: '30/04/2020',
    time: [ {
        time: '9:30',
        free:true
    },
    {
        time:'10:00',
        free:true
    }
        
    ]

},
{
    date: '22/04/2020',
    time: [ {
        time: '9:30',
        free:true
    },
    {
        time:'10:00',
        free:true
    }
        
    ]

},
,
{
    date: '23/04/2020',
    time: [ {
        time: '9:30',
        free:false
    },
    {
        time:'10:00',
        free:false
    }
        
    ]

}]

const [doctorSession, setDoctorSession] = useState(DR_DATA)
let sessionDate = doctorSession.map((session) => {
    session.parsedDate = parse(session.date, 'dd/MM/yyyy', new Date())
    session.freeTime = session.time.reduce((prev,cur) => {
        console.log(prev.free, cur.free)
        return prev + cur.free
    },false)
    return session

});


console.log(sessionDate)

const header = () => {
const dateFormat = "MMMM yyyy";
// console.log(parse(doctorSession, 'dd/MM/yyyy', new Date()))
console.log(isSameDay(sessionDate[0].parsedDate,selectedDate))

return (
   <div className="header row flex-middle">
      <div className="column col-start">
         <div className="icon" onClick={prevMonth}>
            chevron_left
         </div>
      </div>
      <div className="column col-center">
         <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
         <div className="icon" onClick={nextMonth}>
            chevron_right
         </div>
      </div>
   </div>
   );
};

const days = () => {
const dateFormat = "EEE";
const days = [];
let startDate = startOfWeek(currentDate);
for (let i = 0; i < 7; i++) {
      days.push(
         <div className="column col-center" key={i}>
         {format(addDays(startDate, i), dateFormat)}
         </div>
      );
   }
   return <div className="days row">{days}</div>;
};
const cells = () => {
const monthStart = startOfMonth(currentDate);
const monthEnd = endOfMonth(monthStart);
const startDate = startOfWeek(monthStart);
const endDate = endOfWeek(monthEnd);
const dateFormat = "d";
const rows = [];
let days = [];
let day = startDate;
let formattedDate = "";
// console.log(day)
while (day <= endDate) {
   for (let i = 0; i < 7; i++) {
   formattedDate = format(day, dateFormat);
   const cloneDay = day;
   console.log(day)
days.push(
    
      <div 
       className={`column cell ${!isSameMonth(day, monthStart)
       ? "disabled" : isSameDay(day, selectedDate) 
       ? "selected" : ''}`} 
    
       key={day} 
       onClick={() => onDateClick((cloneDay))}
       > 
       <span className="number">{formattedDate}</span>
       {sessionDate.map((session) => {
        return  isSameDay(day, session.parsedDate) && session.freeTime != 0 ?  <span className='drsession'></span> : ''
    })}
    {sessionDate.map((session) => {
        return  isSameDay(day, session.parsedDate) && session.freeTime == 0 ?  <span className='drsession-full'></span> : ''
    })}
       <span className="bg">{formattedDate}</span>
     </div>
     );
   day = addDays(day, 1);
  }
rows.push(
      <div className="row" key={day}> {days} </div>
    );
   days = [];
 }
 return <div className="body">{rows}</div>;
}
const nextMonth = () => {
   setCurrentDate(addMonths(currentDate, 1));
};
const prevMonth = () => {
   setCurrentDate(subMonths(currentDate, 1));
};
const onDateClick = day => {
setSelectedDate(day);
}
return (
   <div className="calendar">
      <div>{header()}</div>
      <div>{days()}</div>
      <div>{cells()}</div>
   </div>
  );
};
export default Calendar;