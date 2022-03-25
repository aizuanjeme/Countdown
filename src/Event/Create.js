import React, { useEffect, useState } from "react";
import "./event.css";
import Counter from "../Shared/Counter";
import ReactToPdf from "react-to-pdf";

const getDatafromLS = () => {
  const data = localStorage.getItem("event");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Create = (props) => {
  const [event, setEvent] = useState(getDatafromLS());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState();
  const [startDate, setStartDate] = useState();

  // form submit event
  const addEvent = (e) => {
    e.preventDefault();
    let newEvent = {
      id: Math.random(),
      name,
      address,
      startDate,
      startTime,
    };
    setEvent([...event, newEvent]);
    setName("");
    setAddress("");
    setStartDate("");
    setStartTime("");
  };

  // delete event from LS
  const deleteEvent = (id) => {
    const filteredEvent = event.filter((element) => {
      return element.id !== id;
    });
    setEvent(filteredEvent);
  };

  // edit event from LS
  const editEvent = (id) => {
    const events = event.find((x) => x.id === id);
    const filteredEvent = event.filter((x) => x.id !== id);
    setEvent(filteredEvent);
    setName(events.name);
    setAddress(events.address);
    setStartDate(events.startDate);
    setStartTime(events.startTime);
  };

  const isBegin = (event) => {
    const hasStarted =
      new Date(` ${event.startDate} ${event.startTime}`).getTime() > new Date();
    return hasStarted;
  };

  useEffect(() => {
    const json = JSON.stringify(event);
    localStorage.setItem("event", json);
  }, [event]);

  const ref = React.createRef();

  return (
    <>
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="container">
          <div class="row">
            <h2 className="title">Event Registration Form</h2>
            <div class="col-lg-4 col-md-5 col-12 align-self-center mb-3">
              <div className="card mr-4">
                <div className="card-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Name of Event
                      </label>
                      <input
                        className="input--style-5"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Address
                      </label>
                      <input
                        className="input--style-5"
                        type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Start Date
                      </label>
                      <input
                        type="date"
                        id="p_startDate"
                        className="form-control"
                        name="startDate"
                        placeholder="Poll startDate"
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                      // ref={register({ required: true })}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Start Time
                      </label>
                      <input
                        type="time"
                        id="p_startTime"
                        name="startTime"
                        className="form-control"
                        placeholder="Poll start time"
                        onChange={(e) => setStartTime(e.target.value)}
                        value={startTime}
                      // ref={register({ required: true })}
                      />
                    </div>

                    <button
                      className="btn btn--radius-2 btn--red"
                      type="submit"
                      onClick={addEvent}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-6 col-12 align-self-start" >
              <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                  <button className="btn btn-primary" onClick={toPdf}>Generate pdf</button>
                )}
              </ReactToPdf>
              <div className="container bg-white" ref={ref} >
                {event &&
                  event.length > 0 &&
                  event.map((event) => (
                    <div className="container border-bottom p-3"  >
                      <div className="row">
                        <div className="col-9"  >
                          <h4>{event.name}</h4>
                          <span>{event.address}</span>
                          <br />
                          <span>
                            {event.startDate} &nbsp; {event.startTime}
                          </span>
                        </div>
                        <div className="col-3">
                          <div>
                            <i
                              class="fas fa-trash-alt text-danger"
                              onClick={() => deleteEvent(event.id)}
                              title="delete"
                            ></i>
                            &nbsp;
                            <i
                              class="fas fa-edit text-warning"
                              onClick={() => editEvent(event.id)}
                              title="edit"
                            ></i>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      {isBegin(event) && (
                        <div>
                          <Counter
                            startDate={event.startDate}
                            startTime={event.startTime}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                {event?.length === 0 && (
                  <div className="row">
                    <strong className="mx-auto">No Event Found</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
