import axios from "axios";
import React, { useRef } from "react";
import { getContactAPI } from "../Api";

const Contact = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const idRef = useRef(1); // Initialize ID ref with 1

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name === null || name === "") {
      nameRef?.current?.focus();
    } else if (email === null || email === "") {
      emailRef?.current?.focus();
    } else if (message === null || message === "") {
      messageRef?.current?.focus();
    }

    const payload = {
      id: idRef.current, // Use the current ID
      name,
      email,
      message,
    };

    try {
      const response = await axios.post(getContactAPI, payload);
      console.log("Response:", response.data);
      // Increment the current ID after successful submission
      idRef.current++;
      // Clear the form
      clearForm();
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
  };

  const clearForm = () => {
    formRef.current.reset();
    nameRef.current.focus();
  };

  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit} ref={formRef} className="mt-1 p-5">
        <div className="mb-3">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              ref={messageRef}
              name="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="mt-2">
            Submit
          </button>
          <button onClick={clearForm} type="button" className="mt-2">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
