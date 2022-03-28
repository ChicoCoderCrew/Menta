/* eslint-disable jsx-a11y/accessible-emoji */
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { ListTickets } from "./ListTickets";
import MatchCard from "../components/matchCard";

export const Tickets = () => {
  const location = useLocation();
  const state = location.state;
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      try {
        axios
          .get(`http://34.132.172.130/users/viewAll`)
          .then(function (response) {
            console.log(response.data);
            setUsers(response.data);
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
    <>
      <h1
        style={{
          color: "#fff",
          fontWeight: "normal",
          marginBottom: "2rem",
        }}>
        Tickets
      </h1>
      {/* To view either list of tickets or a single ticket */}
      <div
        style={{
          maxWidth: "600px",
          minHeight: "615px",
          margin: "auto",
          textAlign: "center",
          padding: "auto",
          display: "flex",
          flexDirection: "column",
        }}>
        {users.map((ticket, index) => (
          <MatchCard ticket={ticket} key={index} />
        ))}
      </div>
    </>
  );
};
