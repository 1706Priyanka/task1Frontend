import { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

export const context = createContext();

export const ContextProvider = (props) => {
  //const nav = useNavigate();
  const [ticketNum, setTicketNum] = useState("");
  const [count, setCount] = useState("");

  const userSignUp = (userData, event) => {
    try {
      axios
        .post(`https://backend-2g5c.onrender.com/register/${event}`, userData)
        .then((res) => {
          // nav("/");
          setTicketNum(res.data.ticketNumber);
          window.alert(
            `Registration Successful "${res.data.ticketNumber}" Kindly save this Ticket Number, this will be required while logging in`
          );
        })
        .catch((err) => {
          window.alert(err.response.data.error.toUpperCase());
        });
    } catch (e) {
      window.alert(e.message);
    }
  };

  const fetchRegistration = (event) => {
    axios
      .get(`https://backend-2g5c.onrender.com/register/${event}`)
      .then((res) => {
        setCount(res.data.count);
        console.log(setCount);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRegistration("param");
  }, []);

  const userSignIn = (ticketNumber, event) => {
    axios
      .post(`https://backend-2g5c.onrender.com/login/${event}`, {
        ticketNumber,
      })
      .then(() => {
        window.location.reload();
        window.alert("Login Successful");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <context.Provider
      value={{
        userSignUp,
        userSignIn,
        ticketNum,
        setTicketNum,
        count,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
