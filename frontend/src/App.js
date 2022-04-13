import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Mentors from "./pages/mentors";
import classNames from "classnames";

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
      <main className="bg-stone-800 text-white m-0">
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
                className={classNames(
                  "center cursor-pointer p-4",
                  pathName === "/" ? "bg-orange-700 text-white" : "text-stone-400",
                )}
                to="/"
                onClick={() => setPathName("/")}>
                Home
              </Link>
              <Link
                className={classNames(
                  "center cursor-pointer p-4",
                  pathName === "profile" ? "bg-orange-700 text-white" : "text-stone-400",
                )}
                to="/profile"
                onClick={() => setPathName("profile")}>
                Profile
              </Link>

              <Link
                className={classNames(
                  "center cursor-pointer p-4",
                  pathName === "mentors" ? "bg-orange-700 text-white" : "text-stone-400",
                )}
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
