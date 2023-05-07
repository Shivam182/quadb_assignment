import React, { Fragment, useEffect, useRef } from "react";
import "./BookingForm.css";

const BookingForm = ({ show }) => {
  const form_modal = useRef(null);


  useEffect(() => {
    if (show === true) {
      form_modal.current.classList.add("show");
    }else{
      form_modal.current.classList.remove('show');
    }
  }, [show]);


  
  return (
    <Fragment>
      <div className="booking">
        <div className="booking-modal" ref={form_modal}>
          <form className="booking-form">
            <label htmlFor="name">Name:</label>
            <input name="name" />

            <label htmlFor="time">Select Time:</label>
            <input name="time" type="time" />

            <h4 id="price">Price $30</h4>

            <button type="submit" id="cnf-btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingForm;
