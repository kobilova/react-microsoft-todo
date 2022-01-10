import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ImporDetails(props) {
  console.log(props);
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params);

  const fetchUsersById = (userId) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchUsersById();
  }, []);
  console.log(user);
  return (
    <div>
      <h1>user details</h1>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </div>
  );
}
