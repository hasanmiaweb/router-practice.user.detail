import React, { useEffect, useState } from "react";
import User from "../User/User";

const Home = () => {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="container ">
      {friend.map((friends) => (
        <User info={friends}></User>
      ))}
    </div>
  );
};

export default Home;
