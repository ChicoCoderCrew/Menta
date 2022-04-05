import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { colorScheme } from "../theme";
import axios from "axios";
// https://picsum.photos/seed/{user.id}/200/300

const Profile = () => {
  const location = useLocation();
  const state = location.state;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // "name": "Some Guy",
  // "userType": "MO",
  // "occupation": "Software Development Engineer",
  // "website": "http://www.google.com",
  // "age": 45,
  // "gender": "M",
  // "bio": "I don't really have much to say.... I'm just Some Guy.",
  // "skills": [
  // "Javascript",
  // "C++"
  // ]

  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  // headers.append("Access-Control-Allow-Origin", "*");
  // headers.append("Origin", "http://localhost:3000");

  useEffect(() => {
    if (state) {
      try {
        axios
          .get(`http://34.132.172.130/user/view/${state.id}`)
          .then(function (response) {
            console.log(response.data);
            setUser(response.data);
          })
          .catch((e) => {
            console.log(e);
            navigate("/");
          });
      } catch (e) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: colorScheme.white,
      }}>
      <h2>User Profile</h2>
      {user && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
          }}>
          <img
            src={`https://picsum.photos/seed/${user.id}/200/200`}
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
          {1 ? <p>{user.name}</p> : <input />}
          {/* <label style={{ color: "gray", fontSize: "14px" }}>Email</label>
        {1 ? <p>{"blabla@blamail.bla"}</p> : <input />} */}
          <label style={{ color: "gray", fontSize: "14px" }}>Occupation</label>
          {1 ? <p>{user.occupation}</p> : <input />}
          <label style={{ color: "gray", fontSize: "14px" }}>Bio</label>
          {1 ? <p>{user.bio}</p> : <input />}

          <label style={{ color: "gray", fontSize: "14px" }}>Skills</label>
          {1 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}>
              {user.skills.map((skill, i) => (
                <p
                  key={i}
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    padding: "2px 4px",
                    marginRight: "5px",
                    backgroundColor: "#916BBF",
                    height: "fit-content",
                    width: "fit-content",

                    borderRadius: "5px",
                  }}>
                  {skill}
                </p>
              ))}
            </div>
          ) : (
            <input />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
