import React from "react";
import "./about.css";
const About = (props) => {
  // console.log(props.users);
  const userss = props.users;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br />
            <br />
            <br />
            <img
              src="https://i.ibb.co/FXDQrTb/pictured-during-a-Headshot-session-ahead-of-the-ICC-Twenty20-World-Cup-on-March-7-2016-in-Dharamsala.jpg"
              alt=""
            />
            <br />
            <br />
            <br />
            {userss}
            <img src="https://i.ibb.co/1d6FCNH/Mushfiqur-Rahim.jpg" alt="" />
            <br />
            <br />
            <br />
            <img src="https://i.ibb.co/3zLKs3Y/Rubel-Hossain.jpg" alt="" />
            <br />
            <br />
            <br />
            <img src="https://i.ibb.co/x2w9mdB/Shakib-Al-Hasan.jpg" alt="" />
            <br />
            <br />
            <br />
          </div>
          <div className="col-md-6">
            <h1>Hello</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eius exercitationem fuga quaerat ea quisquam, ipsam ratione
              expedita asperiores ut!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
