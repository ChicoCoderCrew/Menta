import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Matches from "./pages/matches";

export const MentaContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  matches: null,
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
        matches: action.payload.matches,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <MentaContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <main>
        <div className="App">
          {/* <header className="App-header">
        <h3 style={{ fontWeight: "lighter" }}>Menta</h3>
      </header> */}
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/matches" element={<Matches />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </MentaContext.Provider>
  );
}

export default App;
