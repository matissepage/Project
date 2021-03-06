import React from 'react';
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calandar.css"

const localizer = momentLocalizer(moment)

class MyCalendar extends React.Component {
    state = {
        events: [
          {
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Some title"
          }
        ]
      };
    
      render() {
        return (
          <div className="App">
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
            />
          </div>
        );
      }
}

export default MyCalendar;