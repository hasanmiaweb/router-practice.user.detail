import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../User/User.css";
const Show = () => {
  const { userId } = useParams();
  //   const [id, name, email] = userId;
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="container">
      <div className="col-md-10 m-auto">
        <div className="userFullDeteil">
          <h1>ID No: {userId}</h1>
          <h1>Name: {friend.name}</h1>
          <h1>Email: {friend.email}</h1>
          <h1>Phone Number: {friend.phone}</h1>
        </div>
      </div>
    </div>
  );
};

export default Show;
