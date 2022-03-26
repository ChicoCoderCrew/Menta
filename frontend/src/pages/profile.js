import React from "react";
import { colorScheme } from "../theme";

// https://picsum.photos/seed/{user.id}/200/300

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: colorScheme.white,
      }}>
      <h2>User Profile</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "flex-start",
        }}>
        <img
          src="https://picsum.photos/seed/random/200/200"
          alt="Girl in a jacket"
          width="100"
          height="100"
          style={{
            borderRadius: "50%",
            alignSelf: "center",
            marginBottom: "24px",
          }}
        />
        <label style={{ color: "gray", fontSize: "14px" }}>Name</label>
        {1 ? <p>{"Bla Bla"}</p> : <input />}
        <label style={{ color: "gray", fontSize: "14px" }}>Email</label>
        {1 ? <p>{"blabla@blamail.bla"}</p> : <input />}
        <label style={{ color: "gray", fontSize: "14px" }}>Occupation</label>
        {1 ? <p>{"Bla Maker"}</p> : <input />}
        <label style={{ color: "gray", fontSize: "14px" }}>Bio</label>
        {1 ? (
          <p>
            {
              "BlaBla Bla bla blablabla...Bla bla blablabla...Bla bla blablabla...Bla bla blablabla...Bla bla blablabla..."
            }
          </p>
        ) : (
          <input />
        )}
      </div>
    </div>
  );
};

export default Profile;
