import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import { context } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { userSignUp, ticketNum, setTicketNum } = useContext(context);
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErr(validate(userData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
      userSignUp(userData, "param");
    }
  }, [formErr, isSubmit, userData]);

  const validate = (values) => {
    const err = {};
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!values.email) {
      err.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      err.email = "invalid email";
    }

    if (!values.name) {
      err.name = "name is required";
    }
    return err;
  };

  return (
    <div>
      <Header />
      <form action="POST" onSubmit={handleSubmit}>
        <div className="container1">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <p>{formErr.name}</p>
        <div className="container1">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <p>{formErr.email}</p>
        <button className="btn">Submit</button>
        {ticketNum && <p>ticket Number :{ticketNum} </p>}
      </form>
      <button
        className="btn2"
        onClick={() => {
          setTicketNum("");
          nav("/");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Register;
