import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../authContext/AuthContext";

function Event1() {
  const nav = useNavigate();
  const { count } = useContext(context);
  console.log(count);

  return (
    <div>
      <div className="main">
        <div className="container">
          <div>
            <img src="Images/event1.png" alt="event1" className="event1" />
          </div>
          <div>
            <p className="eventName">Samyog - Art Science Gallery</p>
            <div>
              <p>Date:February 4, 2023</p>
              <p>Time: 11:00 am - 8:00 pm</p>
              <p>Location: YuvaPatha</p>

              <p>Number of people registered: {count}</p>
            </div>
          </div>
        </div>
        <p className="about">
          Samyog is an art-science gallery that seeks to unite the worlds of art
          and science in a unique and thought-provoking way. Our goal is to
          showcase the beauty and wonder of science through the lens of art
          while raising funds and awareness for our project, The Param Science
          Experience. This project aims to bring the joy of science to the
          people of Bengaluru, providing them with hands-on, interactive
          experiences that spark curiosity and inspire creativity.
        </p>
        <p className="about">
          Our collection at Samyog includes cutting-edge works created using AI,
          electronic components, 3D printing and other innovative techniques.
          Everyone deserves access to the wonder and beauty of science, and with
          your help, we can make that a reality.
        </p>
        <p className="about">
          By visiting our gallery, you will have the chance to view innovative
          and groundbreaking artwork and make a difference by supporting a
          worthwhile cause. So come and experience the connection between art,
          science, and technology at Samyog and be a part of something
          extraordinary.
        </p>

        <button className="registerBtn" onClick={() => nav("/register")}>
          Register
        </button>
        <button className="loginBtn" onClick={() => nav("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Event1;
