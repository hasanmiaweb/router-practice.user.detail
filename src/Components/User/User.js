import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = (props) => {
  const { name, email, id } = props.info;
  return (
    <div className="col-md-10 m-auto">
      <div className="userFullDeteil ">
        <h1>{name}</h1>
        <h3>{id}</h3>
        <Link to={`show/friend/${id}`}>
          <button>Show Deteils</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
