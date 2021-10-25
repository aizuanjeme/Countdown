import React, { useState, useRef, useEffect } from "react";


const Completionist = () => <span className="text-danger">It's time for your event</span>;

const Counter = (props) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef;

  const setTimer = () => {
    const CountdownDate = new Date(
      ` ${props.startDate} ${props.startTime}`
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const remainingTime = CountdownDate - now;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      if (remainingTime < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div
        className="row bg-light text-primary py-2 px-1 text-center"
        style={{ fontSize: "0.9em" }}
      >
        <div className="col-1 text-center">
          <strong>{timerDays}</strong>
          <h6>Days</h6>
        </div>
        :
        <div className="col-1 text-center">
          <strong>{timerHours}</strong>
          <h6>Hrs</h6>
        </div>
        :
        <div className="col-1 text-center">
          <strong>{timerMinutes}</strong>
          <h6>Mins</h6>
        </div>
        :
        <div className="col-1 text-center">
          <strong>{timerSeconds}</strong>
          <h6>Secs</h6>
        </div>
      </div>
    </div>
  );
};

export default Counter;
