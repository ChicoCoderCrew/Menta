import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorScheme } from "../theme";

const Home = () => {
  const [ID, setID] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(ID);
    navigate("./profile", { state: { id: ID } });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <h1 style={{ margin: 0 }}>Welcome to Menta!</h1>

      <div
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
        }}>
        <label
          style={{ color: "gray", fontSize: "24px", marginBottom: "1rem" }}>
          Enter your ID
        </label>
        <div
          style={{
            position: "relative",
            // border: "solid 2px gray",
            width: "fit-content",
            margin: "1rem auto",
          }}>
          <input
            type="number"
            style={{
              alignSelf: "center",
              maxWidth: "220px",
              border: "none",
              backgroundColor: colorScheme.lightDarkOrange,
              borderRadius: "5px",
              fontSize: "20px",
              color: colorScheme.white,
              padding: "15px 10px",
            }}
            onChange={(e) => setID(e.target.value)}
          />

          <button
            style={{
              height: "42px",
              width: "45px",
              position: "absolute",
              color: "white",
              fontSize: "20px",
              borderRadius: "50%",
              backgroundColor: "rgb(4, 170, 109)",
              right: 5,
              top: 5,
              border: "none",
              cursor: "pointer",
            }}
            type="submit"
            onClick={handleSubmit}>
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
