import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";

import "./RegisterForm.css";

export default function RegisterForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sleepy-taiga-06488.herokuapp.com/auth/register", {
        email,
        password,
      })
      .then((res) => {
        setIsAuth(true);
        localStorage.setItem("token", res.data["token"]);
        history.push("/");
      });
  };
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <div className="login__input__container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login__input"
          placeholder="Email address"
          type="text"
        />
      </div>
      <div className="login__input__container">
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login__input"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="login__button__container">
        <button className="login__button">Register</button>
      </div>
    </form>
  );
}
