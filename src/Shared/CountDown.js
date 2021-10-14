import React from 'react';
import Countdown from 'react-countdown';
import { formatter } from './helpers/converter';

// Random component
const Completionist = () => <span className="text-danger">Poll has Ended</span>;

const CountDown = ({ date, time }) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div className="row bg-light text-primary py-2 px-1 text-center" style={{ fontSize: "0.7em" }}>
                    <div className="col-2 text-center">
                        <h6>Days</h6>
                        <strong>{days}</strong>
                    </div>:
                    <div className="col-2 text-center">
                        <h6>Hrs</h6>
                        <strong>{hours}</strong>
                    </div>:
                    <div className="col-2 text-center">
                        <h6>Mins</h6>
                        <strong>{minutes}</strong>
                    </div>:
                    <div className="col-2 text-center">
                        <h6>Secs</h6>
                        <strong>{seconds}</strong>
                    </div>
                </div>
            )





            //  <span>days {days}:hours {hours}:minutes {minutes}:seconds {seconds}</span>;

            // <div>
            //     <div>days {days}</div>:
            //     <div>hours {hours}</div>:
            //     <div>minutes {minutes}</div>:
            //     <div>seconds {seconds}</div>
            // </div>;
        }
    };


    return (

        <Countdown date={new Date(formatter.addTimeToDate(date, time))}
            renderer={renderer}>
            <Completionist />
        </Countdown>

    );

}
export default CountDown;
