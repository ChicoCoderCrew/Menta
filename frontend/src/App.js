import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Mentors from "./pages/mentors";

export const MentaContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  mentors: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        user: action.payload.user,
      };
    case "UPDATE_MATHCES":
      return {
        ...state,
        mentors: action.payload.mentors,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname.split("/")[1]);
  }, [window.location.pathname]);

  return (
    <MentaContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <main>
        <div className="App">
          <BrowserRouter>
            <div
              style={{
                textDecoration: "none",
                margin: "0px",
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}>
              <Link
                className={
                  pathName === "/" ? "navbar-item active" : "navbar-item"
                }
                to="/"
                onClick={() => setPathName("/")}>
                Home
              </Link>
              <Link
                className={
                  pathName === "profile" ? "navbar-item active" : "navbar-item"
                }
                to="/profile"
                onClick={() => setPathName("profile")}>
                Profile
              </Link>

              <Link
                className={
                  pathName === "mentors" ? "navbar-item active" : "navbar-item"
                }
                to="/mentors"
                onClick={() => setPathName("mentors")}>
                Mentors
              </Link>
            </div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/Mentors" element={<Mentors />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </MentaContext.Provider>
  );
}

export default App;
