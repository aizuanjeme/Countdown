import React, { useState } from "react";
// import { useForm } from 'react-hook-form'
import './event.css';
// import './events.css';

const Create = () => {
    // const { register, handleSubmit, errors, setValue, watch, trigger } = useForm({
    //     mode: "onChange",
    //     reValidateMode: 'onChange'
    //   });
    const [state, setState] = useState({
        events: [],
        event: {
            name: "",
            // phoneNo: "",
            address: "",
            startDate: null,
            startTime: null,
            // organizerName: "",
            // organizerPhoneNumber: ""
        }
    })

    const handleOnChange = (e) => {
        setState({ event: e.target.value })
    }

    return (
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div className="wrapper wrapper--w790">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title">Event Registration Form</h2>
                    </div>
                    <div className="card-body">
                        <form method="POST">
                            <div className="form-row m-b-55">
                                <div className="name">Name of Event</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Address</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="address" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="name" htmlFor="p_startDate">Start Date</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input
                                            type="date"
                                            id="p_startDate"
                                            className="form-control"
                                            name="startDate"
                                            placeholder="Poll startDate"
                                            onChange={(e) => handleOnChange(e)}
                                            // ref={register({ required: true })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="name" htmlFor='p_startTime'>Start Time</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input type="time"
                                            id='p_startTime'
                                            name="startTime"
                                            className="form-control"
                                            placeholder="Poll start time"
                                            onChange={(e) => handleOnChange(e)}
                                            // ref={register({ required: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn--radius-2 btn--red" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;