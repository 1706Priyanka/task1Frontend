import React, { useContext } from "react";
import { useState } from "react";
import Header from "./Header";
import { context } from "../authContext/AuthContext";

function Login() {
  const { userSignIn } = useContext(context);
  const [userData, setUserData] = useState({
    ticketNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.ticketNumber) {
      userSignIn(userData.ticketNumber, "param");
    }
  };
  return (
    <div>
      <Header />
      <form action="POST" onSubmit={handleSubmit}>
        <label>Ticket Number:</label>
        <input
          type="text"
          name="ticketNumber"
          placeholder="ticketNumber"
          onChange={handleChange}
        />

        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
