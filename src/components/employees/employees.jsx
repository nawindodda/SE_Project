import React, { useState, useEffect } from "react";
import axios from 'axios';

const employees = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Carol Taylor" },
  { id: 4, name: "David Brown" },
  { id: 5, name: "Eva Martinez" },
  { id: 6, name: "Frank White" },
  { id: 7, name: "Grace Lee" },
  { id: 8, name: "Henry Wilson" },
  { id: 9, name: "Isabel Garcia" },
  { id: 10, name: "Jack Davis" },
  { id: 11, name: "Karen Hill" },
  { id: 12, name: "Louis Allen" },
  { id: 13, name: "Maria Scott" },
  { id: 14, name: "Nathan Moore" },
  { id: 15, name: "Olivia Torres" },
];

const shifts = [
  "Morning (8 AM - 4 PM)",
  "Afternoon (4 PM - 12AM)",
  "Night (12AM - 8 AM)",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const EmployeeSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        const generateSchedule = () => {
          let schedule = days.map((day) => ({
            day,
            shifts: shifts.map((shift, index) => ({
              shift,
              employee:
                response.data[
                  (days.indexOf(day) * shifts.length + index) %
                    response.data.length
                ].name,
            })),
          }));
          return schedule;
        };
        setSchedule(generateSchedule());
      } catch (err) {
        return;
      }
    };

    fetchData();
    const generateSchedule = () => {
      let schedule = days.map((day) => ({
        day,
        shifts: shifts.map((shift, index) => ({
          shift,
          employee:
            employees[
              (days.indexOf(day) * shifts.length + index) % employees.length
            ].name,
        })),
      }));
      return schedule;
    };
    setSchedule(generateSchedule());
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-3" style={{ color: "#14738c" }}>
        Weekly Employee Schedule
      </h3>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark" style={{ color: "#14738c" }}>
          <tr>
            <th>Day</th>
            {shifts.map((shift, index) => (
              <th key={index}>{shift}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, index) => (
            <tr key={index}>
              <td>{day.day}</td>
              {day.shifts.map((shift, index) => (
                <td key={index}>{shift.employee}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSchedule;
