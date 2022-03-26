import React from "react";
import { colorScheme } from "../theme";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: colorScheme.white,
      }}>
      <h2>Profile</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
        <label>Name</label>
        {1 ? <p>{"Bla Bla"}</p> : <input />}
        <label>Email</label>
        {1 ? <p>{"blabla@blamail.bla"}</p> : <input />}
      </div>
    </div>
  );
};

export default Profile;
