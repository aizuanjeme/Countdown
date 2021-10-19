import React, { useEffect, useState } from "react";
import { View } from "../View/View";
// import { useForm } from 'react-hook-form'
import './event.css';
// import './events.css';


const getDatafromLS = () => {
    const data = localStorage.getItem('event');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

const Create = () => {
    const [event, setEvent] = useState(getDatafromLS())

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [startTime, setStartTime] = useState()
    const [startDate, setStartDate] = useState()

    // form submit event
    const addEvent = (e) => {
        e.preventDefault();
        let newEvent = {
            name,
            address,
            startDate,
            startTime,
        };
        setEvent([...event, newEvent]);
        setName('');
        setAddress('');
        setStartDate('');
        setStartTime('');
    };

    useEffect(() => {
        const json = JSON.stringify(event);
        localStorage.setItem("event", json);
    }, [event]);

    return (
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div className="container">
                <div class="row">
                    <h2 className="title">Event Registration Form</h2>
                    <div class="col-4 align-self-center">
                        <div className="card mr-4">

                            <div className="card-body">
                                <form >

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Name of Event</label>
                                        <input className="input--style-5"
                                            type="text"
                                            name="name"
                                            onChange={(e) => setName(e.target.value)} value={name}
                                        /></div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                                        <input
                                            className="input--style-5"
                                            type="text"
                                            name="address"
                                            onChange={(e) => setAddress(e.target.value)} value={address}
                                        />
                                    </div>


                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            id="p_startDate"
                                            className="form-control"
                                            name="startDate"
                                            placeholder="Poll startDate"
                                            onChange={(e) => setStartDate(e.target.value)} value={startDate}
                                        // ref={register({ required: true })}
                                        /></div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Start Time</label>
                                        <input type="time"
                                            id='p_startTime'
                                            name="startTime"
                                            className="form-control"
                                            placeholder="Poll start time"
                                            onChange={(e) => setStartTime(e.target.value)} value={startTime}
                                        // ref={register({ required: true })}
                                        /></div>


                                    <button className="btn btn--radius-2 btn--red" type="submit" onClick={addEvent}>Save</button>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 align-self-start">
                        <div className="card">
                            <div className="card-body">
                                {event.length > 0 && 
                                    <div>

                                        <View events={event} />

                                    </div>
            
         }
                                </div>

                       </div>
                        </div>


                    </div>


                </div>
            </div>
            );
}

            export default Create;