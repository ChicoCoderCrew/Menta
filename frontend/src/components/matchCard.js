import React, { useEffect, useState } from "react";

export const MatchCard = ({ user = {}, selectuser }) => {
  const [userState, setuserState] = useState({});

  const selcuser = () => selectuser(userState);

  useEffect(() => {
    console.log(user);
    setuserState(user);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "5px 10px",
        textAlign: "left",
        maxWidth: "100%",
        borderRadius: "5px",
        margin: "2px 0",
        backgroundColor: "#3D2C8D",
        cursor: "pointer",
      }}
      onClick={selcuser}
      data-testid={`user-${userState.id}`}>
      <p style={{ color: "#fff", width: "25px" }}> {userState.id}</p>
      <p
        style={{
          color: "#fff",
          width: "60px",
          fontStyle: "oblique",
          textAlign: "center",
        }}>
        {userState.status}
      </p>

      <p style={{ color: "#fff", width: "65%" }}> {userState.subject}</p>
      <p style={{ color: "#fff", fontSize: "12px", maxWidth: "100px" }}>
        {new Date(userState.created_at).toDateString().slice(3)}
      </p>
    </div>
  );
};
